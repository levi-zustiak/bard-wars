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
        Schema::create('cards', function (Blueprint $table) {
            $table->id();
            $table->string('name')->unique();
            $table->enum('landscape', ['blue plains', 'cornfield', 'nicelands', 'useless swamp', 'sandylands', 'icylands', 'rainbow']);
            $table->enum('type', ['creature', 'spell', 'building']);
            $table->string('trigger')->nullable();
            $table->text('ability');
            $table->integer('cost');
            $table->integer('attack')->nullable();
            $table->integer('defense')->nullable();
            $table->string('image')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('cards');
    }
};
