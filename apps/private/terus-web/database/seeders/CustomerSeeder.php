<?php

namespace Database\Seeders;

use App\Models\Customer;
use App\Models\Lesson;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CustomerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $rows = [
            // user 1
            ['user_id' => 1, 'name' => 'Ana Silva',      'phone' => '11999990001', 'notes' => 'Cliente VIP'],
            ['user_id' => 1, 'name' => 'Bruno Lima',     'phone' => '11999990002', 'notes' => null],
            ['user_id' => 1, 'name' => 'Carla Souza',    'phone' => '11999990003', 'notes' => 'Prefere manhã'],
            ['user_id' => 1, 'name' => 'Diego Alves',    'phone' => '11999990004', 'notes' => null],
            ['user_id' => 1, 'name' => 'Elisa Rocha',    'phone' => '11999990005', 'notes' => 'Contato WhatsApp'],

            // user 2
            ['user_id' => 2, 'name' => 'Fabio Santos',   'phone' => '21999990006', 'notes' => null],
            ['user_id' => 2, 'name' => 'Gabriela Nunes', 'phone' => '21999990007', 'notes' => 'Cliente nova'],
            ['user_id' => 2, 'name' => 'Heitor Costa',   'phone' => '21999990008', 'notes' => null],
            ['user_id' => 2, 'name' => 'Isabela Moraes', 'phone' => '21999990009', 'notes' => 'Prefere tarde'],
            ['user_id' => 2, 'name' => 'Joao Pereira',   'phone' => '21999990010', 'notes' => null],
        ];

        foreach ($rows as $row) {
            Customer::firstOrCreate(
                ['user_id' => $row['user_id'], 'phone' => $row['phone']],
                $row
            );
        }
    }
}
