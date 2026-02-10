<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserRequest;
use App\Http\Resources\UserResource;
use App\Models\User;
use Exception;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class UserController extends Controller
{
    public function index(): Response
    {
        $users = User::paginate(3);

        return Inertia::render('users/index', ['users' => UserResource::collection($users)]);
    }

    public function show(User $user): Response
    {
        return Inertia::render('users/show', ['user' => new UserResource($user)]);
    }

    public function create(): Response
    {
        return Inertia::render('users/create');
    }

    public function store(UserRequest $request): RedirectResponse
    {
        try {
            $user = DB::transaction(fn() => User::create([
                'name' => $request->name,
                'email' => $request->email,
                'password' => $request->password,
            ])); // Existe forma mais avançada e simplificada de cadastrar os dados, será apresentado no curso mais pra frente. Nesse formato, informamos as colunas necessárias na tabela

            return Redirect::route('users.show', ['user' => $user->id])->with('success', 'Usuário cadastrado com sucesso.');
        } catch (Exception $e) {
            Log::warning('Usuário não cadastrado.', ['error' => $e->getMessage()]);

            return Redirect::back()->with('error', 'Usuário não cadastrado com sucesso.');
        }
    }

    public function edit(User $user): Response
    {
        return Inertia::render('users/edit', ['user' => new UserResource($user)]);
    }

    public function update(UserRequest $request, User $user): RedirectResponse
    {
        try {
            DB::transaction(fn() => $user->update([
                'name' => $request->name,
                'email' => $request->email,
            ]));

            return Redirect::route('users.show', ['user' => $user->id])->with('success', 'Usuário editado com sucesso.');
        } catch (Exception $e) {
            Log::warning('Usuário não editado', ['error' => $e->getMessage()]);

            return Redirect::back()->with('error', 'Usuário não editado com sucesso.');
        }
    }

    public function destroy(User $user)
    {
        try {
            $user->delete();

            return Redirect::route('users.index')->with('success', 'Usuário apagado com sucesso.');
        } catch (Exception $e) {
            Log::warning('Usuário não apagado.', ['error' => $e->getMessage()]);

            return Redirect::route('users.index')->with('error', 'Usuário não apagado com sucesso.');
        }
    }

    public function editPassword(User $user)
    {
        return Inertia::render('users/edit-password', ['user' => new UserResource($user)]);
    }

    public function updatePassword(Request $request, User $user)
    {
        // dd($request);

        $request->validate([
            'password' => 'required|string|min:8|confirmed', // Obrigatório, tipo string, no mínimo 8 caracteres e deve confirmar o valor. Seguindo a documentação do laravel, já identifica que confirmed refere-se ao campo password_confirmation
        ], [
            'password.required' => 'O campo senha é obrigatório.',
            'password.string' => 'A senha deve ser uma string válida.',
            'password.min' => 'A senha deve ter no mínimo :min caracteres.',
            'password.confirmed' => 'A confirmação da senha não corresponde.',
        ]);

        try {
            DB::transaction(fn() => $user->update([
                'password' => $request->password,
            ]));

            return Redirect::route('users.show', ['user' => $user->id])->with('success', 'Senha alterada com sucesso.');
        } catch (Exception $e) {
            Log::warning('Senha do usuário não alterada', ['error' => $e->getMessage()]);

            return Redirect::back()->with('error', 'Senha não alterada com sucesso.');
        }
    }
}
