import { createRouter, createWebHistory } from "vue-router";
import { routes } from "./routes";
import { useAuthStore } from "@/modules/auth/stores/auth";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to) => {
  const authStore = useAuthStore();

  console.log(to.name);

  // 1. Não está indo pra tela de autenticação
  // 2. A tela requer autenticação
  // 3. Usuário não está autenticado
  if (
    to.name !== "Auth" &&
    to.meta.requiresAuth &&
    !authStore.isAuthenticated
  ) {
    return { name: "Auth", query: { redirect: to.fullPath } };
  }

  if (authStore.isAuthenticated && to.name === "Auth") {
    const redirect = (to.query.redirect as string) ?? { name: "Home" };
    return redirect;
  }
});

export default router;
