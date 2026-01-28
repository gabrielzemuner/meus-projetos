<?php

namespace App\Http\Controllers;

use App\Http\Requests\CourseRequest;
use App\Http\Resources\CourseResource;
use App\Models\Course;
use Exception;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class CourseController extends Controller
{
    public function index()
    {
        // Recuperar os registros do banco de dados
        $courses = Course::orderByDesc('created_at')->paginate(10);

        // Carregar VIEW
        return Inertia::render('courses/index', ['courses' => CourseResource::collection($courses)]);
    }

    public function show(Course $course)
    {
        // Recuperar as informações do curso do banco de dados com request
        // $course = Course::where('id', $request->course)->first();

        // Carregar VIEW
        return Inertia::render('courses/show', ['course' => new CourseResource($course)]);
    }

    public function create()
    {
        // Carregar VIEW
        return Inertia::render('courses/create');
    }

    public function store(CourseRequest $request)
    {
        try {
            // Cadastrar no banco de dados na tabela 'courses' os valores de todos os campos do form
            // Exemplo todos os campos
            // Course::create($request->all());

            // $course = Course::create([
            //     'name' => $request->name,
            //     'price' => $request->price,
            // ]);

            $course = DB::transaction(fn() => Course::create([
                'name' => $request->name,
                'price' => $request->price,
            ]));

            // Redirecionar o usuário, enviando uma mensagem de sucesso
            return Redirect::route('courses.show', ['course' => $course->id])->with('success', 'Curso cadastrado com sucesso.');
        } catch (Exception $e) {
            // Salvar log
            Log::warning('Curso não cadastrado.', ['error' => $e->getMessage()]);

            // Redirecionar o usuário, enviando a mensagem de erro
            return Redirect::back()->with('error', 'Curso não cadastrado com sucesso.');
        }
    }

    public function edit(Course $course)
    {
        // Carregar VIEW
        return Inertia::render('courses/edit', ['course' => new CourseResource($course)]);
    }

    public function update(CourseRequest $request, Course $course)
    {
        try {
            // Editar as informações do registro no banco de dados
            // $course->update([
            //     'name' => $request->name,
            //     'price' => $request->price,
            // ]);
            DB::transaction(fn() => $course->update([
                'name' => $request->name,
                'price' => $request->price,
            ]));

            // Redirecionar o usuário para a página visualizar curso, enviando uma mensagem de sucesso
            return Redirect::route('courses.show', ['course' => $course->id])->with('success', 'Curso editado com sucesso.');
        } catch (Exception $e) {
            // Salvar log
            Log::warning('Curso não editado', ['error' => $e->getMessage()]);

            // Redirecionar o usuário, enviando a mensagem de erro
            return Redirect::back()->with('error', 'Curso não editado com sucesso.');
        }
    }

    public function destroy(Course $course)
    {
        try {
            // Excluir o registro do banco de dados
            $course->delete();

            // Redirecionar o usuário, enviando uma mensagem de sucesso
            return Redirect::route('courses.index')->with('success', 'Curso apagado com sucesso.');
        } catch (Exception $e) {
            // Salvar log
            Log::warning('Curso não apagado.', ['error' => $e->getMessage()]);

            // Redirecionar o usuário, enviando uma mensagem de erro
            return Redirect::route('courses.index')->with('error', 'Curso não apagado com sucesso.');
        }
    }
}
