<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    protected $table = 'customers';

    protected $fillable = ['user_id', 'name', 'phone', 'notes'];

    // Criar relacionamento entre um e muitos (one to many)
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
