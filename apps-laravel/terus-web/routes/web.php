<?php

use App\Http\Controllers\CourseController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\DispatchController;
use App\Http\Controllers\LessonController;
use App\Http\Controllers\ReminderController;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    // Terus
    Route::get('/usuarios', [UserController::class, 'index'])->name('users.index');
    Route::get('/usuario/{user}', [UserController::class, 'show'])->name('users.show'); // {mesmo_nome_model}
    Route::get('/cadastrar-usuario', [UserController::class, 'create'])->name('users.create');
    Route::post('/cadastrar-usuario', [UserController::class, 'store'])->name('users.store');
    Route::get('/editar-usuario/{user}', [UserController::class, 'edit'])->name('users.edit');
    Route::put('/atualizar-usuario/{user}', [UserController::class, 'update'])->name('users.update');
    Route::delete('/apagar-usuario/{user}', [UserController::class, 'destroy'])->name('users.destroy');
    Route::get('/editar-senha-usuario/{user}', [UserController::class, 'editPassword'])->name('users.editPassword');
    Route::put('/atualizar-senha-usuario/{user}', [UserController::class, 'updatePassword'])->name('users.updatePassword');

    // Cursos
    Route::get('/cursos', [CourseController::class, 'index'])->name('courses.index');
    Route::get('/curso/{course}', [CourseController::class, 'show'])->name('courses.show');
    Route::get('/cadastrar-curso', [CourseController::class, 'create'])->name('courses.create');
    Route::post('/cadastrar-curso', [CourseController::class, 'store'])->name('courses.store');
    Route::get('/editar-curso/{course}', [CourseController::class, 'edit'])->name('courses.edit');
    Route::put('/atualizar-curso/{course}', [CourseController::class, 'update'])->name('courses.update');
    Route::delete('/apagar-curso/{course}', [CourseController::class, 'destroy'])->name('courses.destroy');

    // Aulas
    Route::get('/aulas/{course}', [LessonController::class, 'index'])->name('lessons.index');
    Route::get('/aula/{lesson}', [LessonController::class, 'show'])->name('lessons.show');
    Route::get('/cadastrar-aula/{course}', [LessonController::class, 'create'])->name('lessons.create');
    Route::post('/cadastrar-aula', [LessonController::class, 'store'])->name('lessons.store');
    Route::get('/editar-aula/{lesson}', [LessonController::class, 'edit'])->name('lessons.edit');
    Route::put('/atualizar-aula/{lesson}', [LessonController::class, 'update'])->name('lessons.update');
    Route::delete('apagar-aula/{lesson}', [LessonController::class, 'destroy'])->name('lessons.destroy');

    // Clientes
    Route::get('/clientes', [CustomerController::class, 'index'])->name('customers.index');
    Route::get('/cliente/{customer}', [CustomerController::class, 'show'])->name('customers.show');
    Route::get('/cadastrar-cliente', [CustomerController::class, 'create'])->name('customers.create');
    Route::post('/cadastrar-cliente', [CustomerController::class, 'store'])->name('customers.store');
    Route::get('/editar-cliente/{customer}', [CustomerController::class, 'edit'])->name('customers.edit');
    Route::put('/atualizar-cliente/{customer}', [CustomerController::class, 'update'])->name('customers.update');
    Route::delete('/apagar-cliente/{customer}', [CustomerController::class, 'destroy'])->name('customers.destroy');

    // Serviços
    Route::get('/servicos', [ServiceController::class, 'index'])->name('services.index');
    Route::get('/servico/{service}', [ServiceController::class, 'show'])->name('services.show');
    Route::get('/cadastrar-servico', [ServiceController::class, 'create'])->name('services.create');
    Route::post('/cadastrar-servico', [ServiceController::class, 'store'])->name('services.store');
    Route::get('/editar-servico/{service}', [ServiceController::class, 'edit'])->name('services.edit');
    Route::put('/atualizar-servico/{service}', [ServiceController::class, 'update'])->name('services.update');
    Route::delete('/apagar-servico/{service}', [ServiceController::class, 'destroy'])->name('services.destroy');

    // Lembretes
    Route::get('/lembretes', [ReminderController::class, 'index'])->name('reminders.index');
    Route::get('/lembrete/{reminder}', [ReminderController::class, 'show'])->name('reminders.show');
    Route::get('/cadastrar-lembrete', [ReminderController::class, 'create'])->name('reminders.create');
    Route::post('/cadastrar-lembrete', [ReminderController::class, 'store'])->name('reminders.store');
    Route::get('/editar-lembrete/{reminder}', [ReminderController::class, 'edit'])->name('reminders.edit');
    Route::put('/atualizar-lembrete/{reminder}', [ReminderController::class, 'update'])->name('reminders.update');
    Route::delete('/apagar-lembrete/{reminder}', [ReminderController::class, 'destroy'])->name('reminders.destroy');
    Route::patch('/lembrete/{reminder}/toggle', [ReminderController::class, 'toggle'])->name('reminders.toggle');

    // Agendamento Mensagens
    Route::get('/disparo-lembretes', [DispatchController::class, 'index'])->name('dispatch.index');
    Route::post('/disparo-lembretes/run', [DispatchController::class, 'run'])->name('dispatch.run');
    Route::post('/disparo-lembretes/reset', [DispatchController::class, 'reset'])->name('dispatch.reset');


    // Cursos via API (rotas no laravel ao invés de usar rotas no react-router-dom nesse instante)
    Route::inertia('/app/courses', 'api/courses/index')->name('courses.index.api');
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
