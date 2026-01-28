<script setup lang="ts">
import MenuItem from "./MenuItem.vue";
</script>

<template>
  <nav class="flex flex-col">
    <!-- <RouterLink to="/">Início</RouterLink>
    <RouterLink to="/counter">Contador</RouterLink> -->

    <MenuItem label="Início" to="/" />
    <MenuItem label="Contador #1" to="/counter" />
    <MenuItem label="Contador #2" to="/counter/pinia" />
  </nav>
</template>
