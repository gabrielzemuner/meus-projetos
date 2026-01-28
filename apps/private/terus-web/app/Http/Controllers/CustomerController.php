<?php

namespace App\Http\Controllers;

use App\Http\Requests\CustomerRequest;
use App\Http\Resources\CustomerResource;
use App\Models\Customer;
use Closure;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Routing\Controllers\HasMiddleware;
use Illuminate\Routing\Controllers\Middleware;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class CustomerController extends Controller implements HasMiddleware
{
    public static function middleware(): array
    {
        return [
            new Middleware(function (Request $request, Closure $next) {
                $model = static::routeModel($request);

                if ($model) {
                    static::ensureOwner($model, Auth::id());
                }

                return $next($request);
            }, only: ['show', 'edit', 'update', 'destroy']),
        ];
    }

    public function index()
    {
        $customers = Customer::where('user_id', Auth::id())->paginate(3);

        return Inertia::render('customers/index', ['customers' => CustomerResource::collection($customers)]);
    }

    public function show(Customer $customer)
    {

        return Inertia::render('customers/show', ['customer' => new CustomerResource($customer)]);
    }


    public function create()
    {
        return Inertia::render('customers/create');
    }

    public function store(CustomerRequest $request)
    {
        try {
            $customer = DB::transaction(fn() => Customer::create([
                'user_id' => Auth::id(),
                'name' => $request->name,
                'phone' => $request->phone,
                'notes' => $request->notes,
            ]));

            return Redirect::route('customers.show', ['customer' => $customer->id])->with('success', 'Cliente cadastrado com sucesso.');
        } catch (Exception $e) {
            Log::warning('Cliente não cadastrado.', ['error' => $e->getMessage()]);

            return Redirect::back()->with('error', 'Cliente não cadastrado com sucesso.');
        }
    }

    public function edit(Customer $customer)
    {

        return Inertia::render('customers/edit', ['customer' => new CustomerResource($customer)]);
    }

    public function update(CustomerRequest $request, Customer $customer)
    {

        try {
            DB::transaction(fn() => $customer->update([
                'name' => $request->name,
                'phone' => $request->phone,
                'notes' => $request->notes,
            ]));

            return Redirect::route('customers.show', ['customer' => $customer->id])->with('success', 'Cliente editado com sucesso.');
        } catch (Exception $e) {
            Log::warning('Cliente não editado', ['error' => $e->getMessage()]);

            return Redirect::back()->with('error', 'Cliente não editado com sucesso.');
        }
    }

    public function destroy(Customer $customer)
    {

        try {
            $customer->delete();

            return Redirect::route('customers.index')->with('success', 'Cliente apagado com sucesso.');
        } catch (Exception $e) {
            Log::warning('Cliente não apagado.', ['error' => $e->getMessage()]);

            return Redirect::route('customers.index')->with('error', 'Cliente não apagado com sucesso.');
        }
    }
}
