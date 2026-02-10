<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UserRequest extends FormRequest
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
        // Receber o id do usuário enviado pela url
        $user = $this->route('user');

        $rules = [
            'name' => 'required|string|max:255', // Obrigatório, tipo string e no máximo 255 caracteres
            'email' => [
                'required',
                'string',
                'email',
                'max:255',
                Rule::unique('users', 'email')->ignore($user?->id), // Obrigatório, tipo string e email, no máximo 255 caracteres e deve ser valor único em relação à tabela users, ignorando o id do próprio usuário 
            ],
        ];

        // Condicional para validar a senha apenas se o método for post. Se for outros métodos (ex: put update), a validação do password não é obrigatória. 
        // Para os métodos editPassword e updatePassword, a senha deverá ser obrigatória e a validação do form será feita via $request->validate(['campos' => 'valores'])
        if ($this->isMethod('post')) {
            $rules['password'] = 'required|string|min:8|confirmed'; // Obrigatório, tipo string, no mínimo 8 caracteres e deve confirmar o valor. Seguindo a documentação do laravel, já identifica que confirmed refere-se ao campo password_confirmation
        }

        return $rules;
    }

    public function messages(): array
    {
        return [
            'name.required' => 'O campo nome é obrigatório!',
            'name.string' => 'O nome deve ser uma string válida.',
            'name.max' => 'O nome não pode ter mais que :max caracteres.',
            'email.required' => 'O campo e-mail é obrigatório.',
            'email.string' => 'O e-mail deve ser uma string válida.',
            'email.email' => 'O e-mail deve ser um endereço de e-mail válido.',
            'email.max' => 'O e-mail não pode ter mais que :max caracteres.',
            'email.unique' => 'Este e-mail já está cadastrado.',
            'password.required' => 'O campo senha é obrigatório.',
            'password.string' => 'A senha deve ser uma string válida.',
            'password.min' => 'A senha deve ter no mínimo :min caracteres.',
            'password.confirmed' => 'A confirmação da senha não corresponde.',
        ];
    }
}
