<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    public function index(Request $request): Response
    {
        $request->session()->flash('success', 'Test message');
        return Inertia::render('dashboard/index');
    }
}