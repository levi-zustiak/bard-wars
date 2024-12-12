<?php

use App\Http\Controllers\CardController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\DeckController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\LogoutController;
use App\Http\Controllers\RegisterController;
use Illuminate\Support\Facades\Route;

Route::inertia('/', 'home/index')->name('home');

Route::middleware(['guest'])->group(function () {
    Route::get('/login', [LoginController::class, 'index'])->name('login');
    Route::post('/login', [LoginController::class, 'authenticate']);

    Route::get('/register', [RegisterController::class, 'index'])->name('register');
    Route::post('/register', [RegisterController::class, 'register']);
});


Route::middleware('auth')->group(function () {
    Route::get('/logout', LogoutController::class)->name('logout');

    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
    Route::get('/decks', [DeckController::class, 'index'])->name('decks');
    Route::get('/decks/create', [DeckController::class, 'create']);
    Route::get('/decks/{deck}', [DeckController::class, 'show']);

    Route::get('/cards', [CardController::class, 'index'])->name('cards');
    Route::get('/cards/create', [CardController::class, 'create'])->name('card.create');
    Route::get('/cards/{card}', [CardController::class, 'show'])->name('card.show');
    Route::post('/cards', [CardController::class, 'store']);
});
