import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
 {
  path: "/Branches",
  name: "Branches",
  component: function(){
    return import("../views/Branches.vue");
  }
 },
 {
  path: "/Branches/Branch",
  name: "Branch",
  component: function(){
    return import("../views/Branch.vue");
  }
 },
 {
  path: "/UpdateBranchForm",
  name: "UpdateBranchForm",
  component: function(){
    return import("../views/UpdateBranchForm.vue");
  }
 },  
 {
  path: "/AddNewBranchForm",
  name: "AddNewBranchForm",
  component: function(){
    return import("../views/AddNewBranchForm.vue");
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
