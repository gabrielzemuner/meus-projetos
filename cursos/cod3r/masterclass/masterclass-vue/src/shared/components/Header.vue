<script setup lang="ts">
import { useAuthStore } from "@/modules/auth/stores/auth";
import { useRouter } from "vue-router";

const authStore = useAuthStore();
const router = useRouter();

async function handleLogout() {
  await authStore.logout();
  router.push({name: 'Auth'})
}
</script>

<template>
  <header
    class="flex justify-between items-center px-6 h-16 border-b border-zinc-800"
  >
    <h1 class="text-xl font-black">Vue 3</h1>
    <div class="flex gap-3 items-center">
      <div class="flex flex-col items-end">
        <span class="text-sm font-bold text-zinc-400">{{
          authStore.user?.name
        }}</span>
        <span class="text-xs text-zinc-500">{{ authStore.user?.email }}</span>
      </div>
      <button class="btn btn-danger" @click="handleLogout">Sair</button>
    </div>
  </header>
</template>
