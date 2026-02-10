<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use OwenIt\Auditing\Auditable as AuditingTable;
use OwenIt\Auditing\Contracts\Auditable;

class Lesson extends Model implements Auditable
{
    use AuditingTable;

    protected $table = 'lessons';

    protected $fillable = ['name', 'description', 'order', 'course_id'];

    // Criar relacionamento entre um e muitos (one to many)
    public function course()
    {
        return $this->belongsTo(Course::class);
    }
}
