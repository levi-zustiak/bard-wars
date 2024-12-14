<?php

namespace App\Http\Controllers;

use App\Http\Resources\CardResource;
use App\Http\Resources\DeckResource;
use App\Models\Card;
use App\Models\Deck;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class DeckController extends Controller
{
    public function index(Request $request): Response
    {
        $decks = $request->user()
            ->decks()
            ->withCount('cards')
            ->get();

        return Inertia::render('decks/index', [
            'decks' => DeckResource::collection($decks),
        ]);
    }

    public function show(Request $request, Deck $deck): Response
    {

        $deck = new DeckResource($deck->load('cards'));

        return Inertia::render('decks/show', [
            'deck' => $deck,
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('decks/create', [
            'cards' => CardResource::collection(Card::all()),
        ]);
    }
}
