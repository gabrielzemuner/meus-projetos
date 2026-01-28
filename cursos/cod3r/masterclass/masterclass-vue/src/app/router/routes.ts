import AuthPage from "@/modules/auth/pages/AuthPage.vue";
import CounterPage from "@/modules/samples/pages/CounterPage.vue";
import CounterPiniaPage from "@/modules/samples/pages/CounterPiniaPage.vue";
import HomePage from "@/modules/samples/pages/HomePage.vue";
import AppLayout from "@/shared/layouts/AppLayout.vue";
import type { RouteRecordRaw } from "vue-router";

export const routes: RouteRecordRaw[] = [
  {
    name: "Auth",
    path: "/auth",
    component: AuthPage,
  },
  {
    path: "/",
    component: AppLayout,
    meta: { requiresAuth: true },
    children: [
      {
        name: "Home",
        path: "",
        component: HomePage,
      },
      {
        name: "Counter",
        path: "counter",
        component: CounterPage,
      },
      {
        name: "CounterPinia",
        path: "counter/pinia",
        component: CounterPiniaPage,
      },
    ],
  },
];
