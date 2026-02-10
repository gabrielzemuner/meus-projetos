<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    protected $table = 'services';

    protected $fillable = ['user_id', 'name', 'description'];

    // Criar relacionamento entre um e muitos (one to many)
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
