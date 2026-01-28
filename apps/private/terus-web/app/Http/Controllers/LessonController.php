<?php

namespace App\Http\Controllers;

use App\Http\Requests\LessonRequest;
use App\Http\Resources\LessonResource;
use App\Models\Course;
use App\Models\Lesson;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class LessonController extends Controller
{
    public function index(Course $course)
    {
        $lessons = Lesson::with('course')->where('course_id', $course->id)->orderBy('order')->get();

        return Inertia::render('lessons/index', [
            'lessons' => LessonResource::collection($lessons),
            'course' => $course
        ]);
    }

    public function show(Lesson $lesson)
    {
        return Inertia::render('lessons/show', ['lesson' => new LessonResource($lesson)]);
    }

    public function create(Course $course)
    {
        return Inertia::render('lessons/create', ['course' => $course]);
    }

    public function store(LessonRequest $request)
    {
        try {
            // Recuperar a última ordem da aula no curso
            $lastOrder = Lesson::where('course_id', $request->course_id)->orderByDesc('order')->first();

            DB::transaction(fn() => Lesson::create([
                'name' => $request->name,
                'description' => $request->description,
                'order' => $lastOrder ? $lastOrder->order + 1 : 1,
                'course_id' => $request->course_id
            ]));

            return Redirect::route('lessons.index', ['course' => $request->course_id])->with('success', 'Aula cadastrada com sucesso.');
        } catch (Exception $e) {
            Log::warning('Aula não cadastrada.', ['error' => $e->getMessage()]);

            return Redirect::back()->with('error', 'Aula não cadastrada com sucesso.');
        }
    }

    public function edit(Lesson $lesson)
    {
        return Inertia::render('lessons/edit', ['lesson' => new LessonResource($lesson)]);
    }

    public function update(LessonRequest $request, Lesson $lesson)
    {
        try {
            DB::transaction(fn() => $lesson->update([
                'name' => $request->name,
                'description' => $request->description
            ]));

            return Redirect::route('lessons.index', ['course' => $lesson->course_id])->with('success', 'Aula editada com sucesso.');
        } catch (Exception $e) {
            Log::warning('Aula não editada', ['error' => $e->getMessage()]);

            return Redirect::back()->with('error', 'Aula não editada com sucesso.');
        }
    }

    public function destroy(Lesson $lesson)
    {
        try {
            $lesson->delete();

            return Redirect::route('lessons.index', ['course' => $lesson->course_id])->with('success', 'Aula apagada com sucesso.');
        } catch (Exception $e) {
            Log::warning('Aula não apagada.', ['error' => $e->getMessage()]);

            return Redirect::route('courses.index')->with('error', 'Aula não apagada com sucesso.');
        }
    }
}
