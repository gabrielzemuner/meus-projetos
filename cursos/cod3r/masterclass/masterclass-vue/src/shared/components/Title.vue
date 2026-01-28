<script setup lang="ts">
interface TitleProps {
  text: string;
  subtitle?: string;
}
// const props = defineProps<TitleProps>(); // acessar a partir de props.text, props.subtitle etc...
defineProps<TitleProps>(); // acessar os valores diretamente
</script>

<template>
  <div>
    <h1 class="text-lg font-black">{{ text }}</h1>
    <!-- renderização condicional -->
    <h2 v-if="subtitle" class="text-zinc-500">{{ subtitle }}</h2>
  </div>
</template>
