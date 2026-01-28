<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

abstract class Controller
{
    // protected function ensureOwner(Model $model): void
    // {
    //     abort_unless($model->user_id === Auth::id(), 403);
    // }

    // exemplo código dentro de controller
    // $this->ensureOwner($reminder);

    // usar método estático pra na controller conseguir ter um construtor com middleware
    protected static function ensureOwner(Model $model, int $userId): void
    {
        abort_unless($model->user_id === $userId, 403);
    }

    protected static function routeModel(Request $request): ?Model
    {
        $route = $request->route();
        if (!$route) return null;

        foreach ($route->parameters() as $param) {
            if ($param instanceof Model) return $param;
        }
        return null;
    }

    protected static function rowPaginate()
    {
        return 5;
    }

    // Calcular próxima data de execução para um lembrete
    public function computeNextRunAt(string $startDate, string $recurrence, ?string $fromDate = null): string
    {
        $base = Carbon::parse($fromDate ?? now()->toDateString());
        $next = Carbon::parse($startDate);

        // Se start_date for hoje ou no passado, pula para a próxima ocorrência (> hoje)
        while ($next->lte($base->startOfDay())) {
            $next = match ($recurrence) {
                'day' => $next->addDay(),
                'week' => $next->addWeek(),
                'month' => $next->addMonth(),
                'year' => $next->addYear(),
                default => $next->addDay(),
            };
        }

        return $next->toDateString();
    }
}
