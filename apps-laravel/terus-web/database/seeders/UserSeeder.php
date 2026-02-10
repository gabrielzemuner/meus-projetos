<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        if (!User::where('email', 'gabriel@example.com')->first()) {
            User::create([
                'name' => 'Gabriel Zemuner',
                'email' => 'gabriel@example.com',
                'password' => '12345678',
            ]);
        }

        if (!User::where('email', 'kawana@example.com')->first()) {
            User::create([
                'name' => 'Kawana Bonafini',
                'email' => 'kawana@example.com',
                'password' => '12345678',
            ]);
        }

        if (!User::where('email', 'jessica@example.com')->first()) {
            User::create([
                'name' => 'Jéssica',
                'email' => 'jessica@example.com',
                'password' => '12345678',
            ]);
        }

        if (!User::where('email', 'gabrielly@example.com')->first()) {
            User::create([
                'name' => 'Gabrielly',
                'email' => 'gabrielly@example.com',
                'password' => '12345678',
            ]);
        }

        if (!User::where('email', 'marcos@example.com')->first()) {
            User::create([
                'name' => 'Marcos',
                'email' => 'marcos@example.com',
                'password' => '12345678',
            ]);
        }

        if (!User::where('email', 'ana@example.com')->first()) {
            User::create([
                'name' => 'Ana',
                'email' => 'ana@example.com',
                'password' => '12345678',
            ]);
        }
    }
}
