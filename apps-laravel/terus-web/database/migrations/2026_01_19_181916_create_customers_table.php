<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('customers', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->cascadeOnDelete();
            // $table->foreignId('user_id')->constrained('users', 'id')->cascadeOnDelete(); // mesmo código acima... ('user_id' => esse padrão o laravel entende que a tabela é 'users' e a coluna pro relacionamento é 'id')
            $table->string('name');
            $table->string('phone')->nullable();
            $table->text('notes')->nullable(); // coluna de observação
            $table->timestamps();

            $table->index(['user_id', 'name']); // criar índice composto (quando as 2 colunas são utilizadas junto)
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('customers');
    }
};
