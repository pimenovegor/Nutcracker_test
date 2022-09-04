import { createRouter, createWebHistory } from "vue-router";
import List from "@/pages/List.vue";
import Movie from "@/pages/Movie.vue";

const routes = [
  {
    path: "/",
    name: "List",
    component: List,
  },
  {
    path: "/:id",
    name: "Movie",
    component: Movie,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
