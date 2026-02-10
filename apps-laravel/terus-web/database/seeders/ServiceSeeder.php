<?php

namespace Database\Seeders;

use App\Models\Customer;
use App\Models\Lesson;
use App\Models\Service;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ServiceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $rows = [
            // user 1
            ['user_id' => 1, 'name' => 'Manicure',    'description' => 'Manicure padrão'],
            ['user_id' => 1, 'name' => 'Pedicure',    'description' => 'Pedicure padrão'],
            ['user_id' => 1, 'name' => 'Sobrancelha', 'description' => 'Design de sobrancelhas'],
            ['user_id' => 1, 'name' => 'Massagem',    'description' => 'Sessão de 30 min'],
            ['user_id' => 1, 'name' => 'Corte',       'description' => 'Corte simples'],

            // user 2
            ['user_id' => 2, 'name' => 'Manicure',    'description' => 'Manicure (user 2)'],
            ['user_id' => 2, 'name' => 'Pedicure',    'description' => 'Pedicure (user 2)'],
            ['user_id' => 2, 'name' => 'Escova',      'description' => 'Escova e finalização'],
            ['user_id' => 2, 'name' => 'Barba',       'description' => 'Barba completa'],
            ['user_id' => 2, 'name' => 'Hidratação',  'description' => 'Hidratação capilar'],
        ];

        foreach ($rows as $row) {
            Service::firstOrCreate(
                ['user_id' => $row['user_id'], 'name' => $row['name']],
                $row
            );
        }
    }
}
