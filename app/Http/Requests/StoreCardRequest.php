<?php

namespace App\Http\Requests;

use App\Enums\Landscapes;
use App\Enums\Types;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreCardRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required|string|unique:cards',
            'landscape' => ['required', Rule::enum(Landscapes::class)],
            'type' => ['required', Rule::enum(Types::class)],
            'ability' => 'required|string|max:255',
            'cost' => 'required|numeric',
            'attack' => 'nullable|numeric',
            'defense' => 'nullable|numeric',
            'image' => 'required|file|mimes:jpeg,png,jpg|max:2048',
        ];
    }
}
