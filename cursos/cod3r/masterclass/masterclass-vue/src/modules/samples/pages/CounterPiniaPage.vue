<script setup lang="ts">
import Title from "@/shared/components/Title.vue";
import { useCounterStore } from "../stores/counter";

const counterStore = useCounterStore();
</script>

<template>
  <div class="flex flex-col gap-6">
    <Title
      text="Contador com Pinia"
      subtitle="Exemplo de contador utilizando Pinia para gerenciamento de estado"
    />
    <div class="flex flex-col gap-4">
      <div class="flex flex-col">
        <span class="text-5xl font-black">{{ counterStore.count }}</span>
        <span class="text-zinc-500">Dobro: {{ counterStore.double }}</span>
      </div>
      <div class="flex gap-2">
        <button class="btn btn-primary" @click="counterStore.increment()">
          +
        </button>
        <button class="btn btn-secondary" @click="counterStore.decrement()">
          +
        </button>
        <button class="btn btn-danger" @click="counterStore.reset()">
          Reset
        </button>
      </div>
    </div>
  </div>
</template>
