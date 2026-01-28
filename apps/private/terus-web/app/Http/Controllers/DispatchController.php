<?php

namespace App\Http\Controllers;

use App\Models\Reminder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

enum DispatchMode: string
{
    case Today = 'today';
    case Due = 'due';
    case Range = 'range';
}

class DispatchController extends Controller
{
    private function buildQuery(DispatchMode $mode, string $today)
    {
        $query = Reminder::with(['customer:id,name,phone', 'service:id,name'])
            ->where('user_id', Auth::id())
            ->where('is_active', true)
            ->orderBy('next_run_at')
            ->orderBy('id');

        if ($mode === DispatchMode::Due) {
            // atrasados + hoje
            $query->whereDate('next_run_at', '<=', $today);
        } elseif ($mode === DispatchMode::Range) {
            // teste: hoje até hoje+days
            $query->whereBetween('next_run_at', [$today, now()->addDays(5)->toDateString()]);
        } else {
            // produção: somente hoje
            $query->whereDate('next_run_at', '=', $today);
        }

        return $query;
    }

    private function dispatchMode()
    {
        return DispatchMode::Range;
    }

    public function index()
    {
        $today = now()->toDateString();

        // today | due | range
        // today -> produção - envia somente mensagens com next_run_at para hoje => next_run_at = $today
        // due -> atradados + hoje => next_run_at <= $today
        // range -> rodar testes, considerando um período de x dias a frente além de hoje => next_run_at between $today and x dias
        $mode = $this->dispatchMode();

        $reminders = $this->buildQuery($mode, $today)->get();

        // Aqui já prepara o “payload” pro front (simples)
        $payloads = $reminders->map(function ($r) {
            return [
                'id' => $r->id,
                'to' => $r->customer->phone,
                'customer' => $r->customer->name,
                'service' => $r->service->name,
                'message' => $r->message,
                'recurrence' => $r->recurrence,
                'start_date' => $r->start_date?->toDateString(),
                'next_run_at' => $r->next_run_at?->toDateString(),
            ];
        });

        return Inertia::render('dispatch/index', [
            'items' => $payloads,
        ]);
    }

    public function run()
    {
        $today = now()->toDateString();
        $mode = $this->dispatchMode();

        $reminders = $this->buildQuery($mode, $today)->get();

        DB::transaction(function () use ($reminders, $today) {
            foreach ($reminders as $r) {
                // data que está sendo executada:
                $runDate = $r->next_run_at?->toDateString() ?? $today;

                $r->update([
                    'next_run_at' => $this->computeNextRunAt(
                        $r->start_date->toDateString(),
                        $r->recurrence,
                        $runDate
                    ),
                ]);
            }
        });

        return back()->with('success', 'Disparo simulado e next_run_at atualizado.');
    }

    public function reset()
    {
        $today = now()->toDateString();

        $reminders = Reminder::where('user_id', Auth::id())->get();

        DB::transaction(function () use ($reminders, $today) {
            foreach ($reminders as $r) {
                if ($r->is_active) {
                    $r->update([
                        'next_run_at' => $this->computeNextRunAt(
                            $r->start_date->toDateString(),
                            $r->recurrence,
                            $today
                        ),
                    ]);
                } else {
                    $r->update(['next_run_at' => null]);
                }
            }
        });

        return back()->with('success', 'Reset aplicado no banco.');
    }
}
