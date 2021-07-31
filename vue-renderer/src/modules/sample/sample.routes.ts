import { RouteConfig } from "vue-router";
import Sample from "./pages/Sample.vue";


export const sampleRoutes: Array<RouteConfig> = [
  {
    path: "/",
    redirect: {
      name: "home",
    },
  },
  {
    path: "/home",
    name: "home",
    component: Sample,
  },
];
