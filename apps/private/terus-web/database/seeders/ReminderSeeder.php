<?php

namespace Database\Seeders;

use App\Models\Customer;
use App\Models\Lesson;
use App\Models\Reminder;
use App\Models\Service;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ReminderSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $c1 = Customer::where('user_id', 1)->orderBy('id')->pluck('id')->all(); // 1..5
        $c2 = Customer::where('user_id', 2)->orderBy('id')->pluck('id')->all(); // 6..10
        $s1 = Service::where('user_id', 1)->orderBy('id')->pluck('id')->all();  // 1..5
        $s2 = Service::where('user_id', 2)->orderBy('id')->pluck('id')->all();  // 6..10

        $rows = [
            // user 1
            [
                'user_id' => 1,
                'customer_id' => $c1[0],
                'service_id' => $s1[0],
                'start_date' => '2026-01-01',
                'recurrence' => 'day',
                'message' => 'Lembrete diário: entrar em contato.',
                'next_run_at' => '2026-01-02',
                'is_active' => true,
            ],
            [
                'user_id' => 1,
                'customer_id' => $c1[1],
                'service_id' => $s1[1],
                'start_date' => '2026-01-03',
                'recurrence' => 'week',
                'message' => 'Lembrete semanal do serviço.',
                'next_run_at' => '2026-01-10',
                'is_active' => true,
            ],
            [
                'user_id' => 1,
                'customer_id' => $c1[2],
                'service_id' => $s1[2],
                'start_date' => '2026-01-05',
                'recurrence' => 'month',
                'message' => 'Lembrete mensal: follow-up.',
                'next_run_at' => '2026-02-05',
                'is_active' => true,
            ],
            [
                'user_id' => 1,
                'customer_id' => $c1[3],
                'service_id' => $s1[3],
                'start_date' => '2026-01-07',
                'recurrence' => 'year',
                'message' => 'Lembrete anual.',
                'next_run_at' => '2027-01-07',
                'is_active' => false,
            ],
            [
                'user_id' => 1,
                'customer_id' => $c1[4],
                'service_id' => $s1[4],
                'start_date' => '2026-01-09',
                'recurrence' => 'month',
                'message' => null,
                'next_run_at' => null,
                'is_active' => true,
            ],

            // user 2
            [
                'user_id' => 2,
                'customer_id' => $c2[0],
                'service_id' => $s2[0],
                'start_date' => '2026-01-02',
                'recurrence' => 'day',
                'message' => 'User 2 - lembrete diário.',
                'next_run_at' => '2026-01-03',
                'is_active' => true,
            ],
            [
                'user_id' => 2,
                'customer_id' => $c2[1],
                'service_id' => $s2[1],
                'start_date' => '2026-01-04',
                'recurrence' => 'week',
                'message' => 'User 2 - lembrete semanal.',
                'next_run_at' => '2026-01-11',
                'is_active' => true,
            ],
            [
                'user_id' => 2,
                'customer_id' => $c2[2],
                'service_id' => $s2[2],
                'start_date' => '2026-01-06',
                'recurrence' => 'month',
                'message' => 'User 2 - lembrete mensal.',
                'next_run_at' => '2026-02-06',
                'is_active' => true,
            ],
            [
                'user_id' => 2,
                'customer_id' => $c2[3],
                'service_id' => $s2[3],
                'start_date' => '2026-01-08',
                'recurrence' => 'year',
                'message' => 'User 2 - lembrete anual.',
                'next_run_at' => '2027-01-08',
                'is_active' => false,
            ],
            [
                'user_id' => 2,
                'customer_id' => $c2[4],
                'service_id' => $s2[4],
                'start_date' => '2026-01-10',
                'recurrence' => 'month',
                'message' => 'User 2 - teste reminder.',
                'next_run_at' => null,
                'is_active' => true,
            ],
        ];

        foreach ($rows as $row) {
            Reminder::firstOrCreate(
                [
                    'user_id' => $row['user_id'],
                    'customer_id' => $row['customer_id'],
                    'service_id' => $row['service_id'],
                    'start_date' => $row['start_date'],
                    'recurrence' => $row['recurrence'],
                ],
                $row
            );
        }
    }
}
