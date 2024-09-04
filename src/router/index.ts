import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "@/pages/Home.vue";
import NotFound from "@/pages/NotFound.vue";
import About from "@/pages/About.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: Home,
    children: [
      {
        path: "", // rota padrão (raiz)
        name: "AllTasks",
        component: () => import("@/components/AllTasks.vue"),
      },
      {
        path: "completed",
        name: "CompletedTasks",
        component: () => import("@/components/CompletedTasks.vue"),
      },
      {
        path: "incomplete",
        name: "IncompleteTasks",
        component: () => import("@/components/IncompleteTasks.vue"),
      },
    ],
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/:pathMatch(.*)*", // rota para páginas não encontradas
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
