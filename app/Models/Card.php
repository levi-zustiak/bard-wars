<?php

namespace App\Models;

use App\Enums\Landscapes;
use App\Enums\Types;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Card extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'name',
        'landscape',
        'type',
        'ability',
        'cost',
        'attack',
        'defense',
        'image'
    ];

    protected $casts = [
        'landscape' => Landscapes::class,
        'type' => Types::class,
    ];

    public function decks(): BelongsToMany
    {
        return $this->belongsToMany(Deck::class);
    }
}
