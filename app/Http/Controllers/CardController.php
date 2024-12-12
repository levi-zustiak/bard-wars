<?php

namespace App\Http\Controllers;

use App\Enums\Landscapes;
use App\Enums\Types;
use App\Http\Requests\StoreCardRequest;
use App\Http\Resources\CardResource;
use App\Models\Card;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class CardController extends Controller
{
    public function index(): Response
    {
       return Inertia::render('cards/index', [
           'cards' => CardResource::collection(Card::all()),
       ]);
    }

    public function show(Card $card): Response
    {
        return Inertia::render('cards/show', [
            'card'  => new CardResource($card),
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('cards/create');
    }

    public function store(StoreCardRequest $request)
    {
        $request->validate([
            'name' => 'required|string',
            'image' => 'required|file|mimes:jpeg,png,jpg|max:2048',
        ]);

        if ($request->hasFile('image')) {
            $file = $request->file('image');
            $fileName = $file->getClientOriginalName();
            $file->storeAs('images/cards', $fileName, 'public');

            Card::create([
                'name' => $request->name,
                'landscape' => Landscapes::BLUE_PLAINS,
                'type' => Types::CREATURE,
                'ability' => 'Your Creatures on adjacent Lanes may not be Attacked',
                'cost' => 2,
                'attack' => 2,
                'defense' => 7,
                'image' => $fileName,
            ]);

            return redirect('cards')->with('success', 'Successfully added card to database.');
        }

        return back()->with('error', 'Failed to add card to database.');
    }
}
