import { createRouter, createWebHistory } from "vue-router";
import Proizvod from "../views/Proizvod.vue";
const routes=[
    {
        path: "/proizvodi",
        name: "proizvodi",
        component: () =>
          import( "../views/proizvodi.vue"),
      }, {
        path: "/proizvod/:id",
        name: "proizvod",
        component: Proizvod,
      },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});
  export default router;