<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ReminderResource extends JsonResource
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
            'start_date' => $this->start_date?->format('Y-m-d'),
            'recurrence' => $this->recurrence,
            'message' => $this->message,
            'next_run_at' => $this->next_run_at?->format('Y-m-d'),
            'is_active' => $this->is_active,
            'customer' => new CustomerResource($this->customer),
            'service' => new ServiceResource($this->service),
        ];
    }
}
