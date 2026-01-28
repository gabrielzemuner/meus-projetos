<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { useAuthStore } from "../stores/auth";
import Loading from "@/shared/components/Loading.vue";

const authStore = useAuthStore();
const router = useRouter();
const route = useRoute();

async function handleLogin() {
  await authStore.login("john.doe@formacao.dev", "123456");
  redirect();
}

async function redirect() {
  const query = route.query.redirect as string;
  const redirect =
    typeof query === "string" && query.startsWith("/") ? query : "/";

  await router.replace(redirect);
}
</script>

<template>
  <Loading v-if="authStore.isLoading" />
  <div
    v-else
    class="flex flex-col gap-4 justify-center items-center min-h-screen"
  >
    <h1 class="text-4xl font-black">Auth Page</h1>
    <button class="btn btn-primary" @click="handleLogin">Login</button>
  </div>
</template>
