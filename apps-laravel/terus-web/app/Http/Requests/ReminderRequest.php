<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rule;

class ReminderRequest extends FormRequest
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
            'customer_id' => ['required', 'integer', Rule::exists('customers', 'id')->where('user_id', Auth::id())],
            'service_id'  => ['required', 'integer', Rule::exists('services', 'id')->where('user_id', Auth::id())],
            'start_date'  => ['required', 'date'], // 'after_or_equal:today'
            'recurrence'  => ['required', 'string', Rule::in(['day', 'week', 'month', 'year'])],
            'message'     => ['required', 'string', 'max:5000'],
            'next_run_at' => ['nullable', 'date', 'after_or_equal:start_date'],
            'is_active'   => ['sometimes', 'boolean'],
        ];
    }
}
