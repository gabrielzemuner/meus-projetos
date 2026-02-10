<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Reminder extends Model
{
    protected $table = 'reminders';

    protected $fillable = ['user_id', 'customer_id', 'service_id', 'start_date', 'recurrence', 'message', 'next_run_at', 'is_active'];

    protected $casts = [
        'start_date' => 'date',
        'next_run_at' => 'date',
        'is_active' => 'boolean',
    ];

    // Criar relacionamento entre um e muitos (one to many)
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function customer()
    {
        return $this->belongsTo(Customer::class);
    }

    public function service()
    {
        return $this->belongsTo(Service::class);
    }
}
