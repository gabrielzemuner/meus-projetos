<?php

namespace App\Http\Controllers;

use App\Http\Requests\ReminderRequest;
use App\Http\Resources\ReminderResource;
use App\Models\Customer;
use App\Models\Reminder;
use App\Models\Service;
use Closure;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Routing\Controllers\HasMiddleware;
use Illuminate\Routing\Controllers\Middleware;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class ReminderController extends Controller implements HasMiddleware
{
    public static function middleware(): array
    {
        return [
            new Middleware(function (Request $request, Closure $next) {
                $model = static::routeModel($request);

                if ($model) {
                    static::ensureOwner($model, Auth::id());
                }

                return $next($request);
            }, only: ['show', 'edit', 'update', 'destroy', 'toggle']),
        ];
    }

    public function index()
    {
        $reminders = Reminder::with(['customer', 'service'])
            ->where('user_id', Auth::id())
            ->orderByDesc('id')
            ->paginate(static::rowPaginate());

        return Inertia::render('reminders/index', ['reminders' => ReminderResource::collection($reminders)]);
    }

    public function show(Reminder $reminder)
    {
        return Inertia::render('reminders/show', ['reminder' => new ReminderResource($reminder)]);
    }

    public function create()
    {
        $customers = Customer::where('user_id', Auth::id())
            ->orderBy('name')
            ->get(['id', 'name']);

        $services = Service::where('user_id', Auth::id())
            ->orderBy('name')
            ->get(['id', 'name']);

        return Inertia::render('reminders/create', [
            'customers' => $customers,
            'services' => $services,
        ]);
    }

    public function store(ReminderRequest $request)
    {
        try {
            $reminder = DB::transaction(fn() => Reminder::create([
                'user_id' => Auth::id(),
                'customer_id' => $request->customer_id,
                'service_id' => $request->service_id,
                'start_date' => $request->start_date,
                'recurrence' => $request->recurrence,
                'message' => $request->message,
                'next_run_at' => null,
                'is_active' => false,
            ]));

            return Redirect::route('reminders.show', ['reminder' => $reminder->id])->with('success', 'Lembrete cadastrado com sucesso.');
        } catch (Exception $e) {
            Log::warning('Lembrete não cadastrado.', ['error' => $e->getMessage()]);

            return Redirect::back()->with('error', 'Lembrete não cadastrado com sucesso.');
        }
    }

    public function edit(Reminder $reminder)
    {
        $customers = Customer::where('user_id', Auth::id())->get();
        $services = Service::where('user_id', Auth::id())->get();

        return Inertia::render('reminders/edit', [
            'reminder' => new ReminderResource($reminder),
            'customers' => $customers,
            'services' => $services,
        ]);
    }

    public function update(ReminderRequest $request, Reminder $reminder)
    {
        try {
            $isActive = (bool) $reminder->is_active;

            DB::transaction(fn() => $reminder->update([
                'customer_id' => $request->customer_id,
                'service_id' => $request->service_id,
                'start_date' => $request->start_date,
                'recurrence' => $request->recurrence,
                'message' => $request->message,
                'next_run_at' => $isActive
                    ? $this->computeNextRunAt($request->start_date, $request->recurrence)
                    : null,
                // 'is_active' => false
            ]));

            return Redirect::route('reminders.show', ['reminder' => $reminder->id])->with('success', 'Lembrete editado com sucesso.');
        } catch (Exception $e) {
            Log::warning('Lembrete não editado', ['error' => $e->getMessage()]);

            return Redirect::back()->with('error', 'Lembrete não editado com sucesso.');
        }
    }

    public function destroy(Reminder $reminder)
    {
        try {
            $reminder->delete();

            return Redirect::route('reminders.index')->with('success', 'Lembrete apagado com sucesso.');
        } catch (Exception $e) {
            Log::warning('Lembrete não apagado.', ['error' => $e->getMessage()]);

            return Redirect::route('reminders.index')->with('error', 'Lembrete não apagado com sucesso.');
        }
    }

    public function toggle(Reminder $reminder)
    {
        $isActive = !$reminder->is_active;

        $reminder->update([
            'is_active' => $isActive,
            'next_run_at' => $isActive
                ? $this->computeNextRunAt($reminder->start_date, $reminder->recurrence)
                : null,
        ]);

        return back()->with('success', $isActive ? 'Lembrete ativado.' : 'Lembrete desativado.');
    }
}
