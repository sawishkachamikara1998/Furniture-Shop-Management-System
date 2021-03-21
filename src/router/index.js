import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/branches",
    name: "Branches",
    component: function(){
      return import("../views/Branches.vue");
    }
  },
  {
    path: "/branches/branch",
    name: "Branch",
    component: function(){
      return import("../views/Branch.vue");
    }
  },
  {
    path: "/signup",
    name: "Signup",
    component: function(){
      return import("../views/Signup.vue");
    }
  },
  {
    path: "/Delivery",
    name: "Delivery",
    component: function(){
      return import("../views/Delivery.vue");
    }
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function() {
      return import(/* webpackChunkName: "about" */ "../views/About.vue");
    }
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
