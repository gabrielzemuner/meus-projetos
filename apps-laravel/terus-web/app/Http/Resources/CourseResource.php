<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CourseResource extends JsonResource
{
    public static $wrap = false;

    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'price' => str_replace('.', ',', $this->price),
            'created_at' => Carbon::parse($this->created_at)->tz('America/Sao_Paulo')->format('d/m/Y H:i:s'),
            'updated_at' => Carbon::parse($this->updated_at)->tz('America/Sao_Paulo')->format('d/m/Y H:i:s'),
        ];
    }
}
