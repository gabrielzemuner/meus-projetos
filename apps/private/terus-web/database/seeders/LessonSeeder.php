<?php

namespace Database\Seeders;

use App\Models\Lesson;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class LessonSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        if (!Lesson::where('name', 'Aula 1')->first()) {
            Lesson::create([
                'name' => 'Aula 1',
                'description' => 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, voluptatibus.',
                'order' => 1,
                'course_id' => 1
            ]);
        }

        if (!Lesson::where('name', 'Aula 2')->first()) {
            Lesson::create([
                'name' => 'Aula 2',
                'description' => 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, voluptatibus.',
                'order' => 2,
                'course_id' => 1
            ]);
        }

        if (!Lesson::where('name', 'Aula 1 B')->first()) {
            Lesson::create([
                'name' => 'Aula 1 B',
                'description' => 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, voluptatibus.',
                'order' => 1,
                'course_id' => 2
            ]);
        }
    }
}
