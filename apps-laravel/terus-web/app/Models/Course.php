<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use OwenIt\Auditing\Auditable as AuditingTable;
use OwenIt\Auditing\Contracts\Auditable;

class Course extends Model implements Auditable
{
    use AuditingTable;

    protected $table = 'courses';

    protected $fillable = ['name', 'price'];

    // Criar relacionamento entre um e muitos (one to many)
    public function lesson()
    {
        return $this->hasMany(Lesson::class);
    }
}
