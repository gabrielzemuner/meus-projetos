<?php

namespace App\Http\Controllers;

use App\Http\Requests\ServiceRequest;
use App\Http\Resources\ServiceResource;
use App\Models\Service;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class ServiceController extends Controller
{
    public function index()
    {
        $services = Service::where('user_id', Auth::id())->paginate(3);

        return Inertia::render('services/index', ['services' => ServiceResource::collection($services)]);
    }

    public function show(Service $service)
    {
        $this->ensureOwner($service);

        return Inertia::render('services/show', ['service' => new ServiceResource($service)]);
    }


    public function create()
    {
        return Inertia::render('services/create');
    }

    public function store(ServiceRequest $request)
    {
        try {
            $service = DB::transaction(fn() => Service::create([
                'user_id' => Auth::id(),
                'name' => $request->name,
                'description' => $request->description,
            ]));

            return Redirect::route('services.show', ['service' => $service->id])->with('success', 'Serviço cadastrado com sucesso.');
        } catch (Exception $e) {
            Log::warning('Serviço não cadastrado.', ['error' => $e->getMessage()]);

            return Redirect::back()->with('error', 'Serviço não cadastrado com sucesso.');
        }
    }

    public function edit(Service $service)
    {
        $this->ensureOwner($service);

        return Inertia::render('services/edit', ['service' => new ServiceResource($service)]);
    }

    public function update(ServiceRequest $request, Service $service)
    {
        $this->ensureOwner($service);

        try {
            DB::transaction(fn() => $service->update([
                'name' => $request->name,
                'description' => $request->description,
            ]));

            return Redirect::route('services.show', ['service' => $service->id])->with('success', 'Serviço editado com sucesso.');
        } catch (Exception $e) {
            Log::warning('Serviço não editado', ['error' => $e->getMessage()]);

            return Redirect::back()->with('error', 'Serviço não editado com sucesso.');
        }
    }

    public function destroy(Service $service)
    {
        $this->ensureOwner($service);

        try {
            $service->delete();

            return Redirect::route('services.index')->with('success', 'Serviço apagado com sucesso.');
        } catch (Exception $e) {
            Log::warning('Serviço não apagado.', ['error' => $e->getMessage()]);

            return Redirect::route('services.index')->with('error', 'Serviço não apagado com sucesso.');
        }
    }
}
