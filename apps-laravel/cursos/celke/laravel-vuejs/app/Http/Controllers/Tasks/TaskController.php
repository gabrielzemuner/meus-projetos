<?php

namespace App\Http\Controllers\Tasks;

use App\Http\Controllers\Controller;
use App\Models\Task;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TaskController extends Controller
{
    /**
     * Listar as tarefas
     */
    public function index()
    {
        // Recuperar as tarefas do banco de dados
        $tasks = Task::orderBy('started_at', 'ASC')->paginate(1);

        // Enviar os dados diretamente para a view
        return Inertia::render('tasks/Index', [
            'tasks' => $tasks,
        ]);
    }

    // Visualizar os detalhes da tarefa
    public function show(Task $task)
    {
        // Enviar os dados diretamente para a view
        return Inertia::render('tasks/Show', ['task' => $task]);
    }

    // Carregar o formulário cadastrar tarefa
    public function create()
    {
        return Inertia::render('tasks/Create');
    }

    // Cadastrar a tarefa no banco de dados
}
