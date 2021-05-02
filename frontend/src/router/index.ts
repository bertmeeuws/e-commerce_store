import { ClothingItem } from "./../interfaces/ClothingItem.types";
import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
  RouteRecordRaw,
} from "vue-router";
import Home from "../views/Home.vue";
import Collection from "../views/Shop/Collection.vue";
import NotFound from "../views/Misc/NotFound.vue";
import ClothingDetail from "../views/Shop/ClothingDetail.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/products",
    name: "Products",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Products.vue"),
  },
  {
    path: "/products/:id",
    name: "Product",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Shop/ProductDetail.vue"),
    props: true,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Misc/About.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Auth/Login.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/Auth/Register.vue"),
  },
  {
    path: "/cart",
    name: "Cart",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/Cart/Cart.vue"),
  },
  {
    path: "/collection/:sex",
    name: "Collection",
    component: Collection,
    props: true,
  },

  {
    path: "/collection/:sex/:item",
    name: "ClothingItem",
    //add detail component, then try
    component: ClothingDetail,
    props: true,
  },
  {
    path: "/:pathMatch(.*)*", //Wild card used to check if routes exist
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),

  routes,
});

export default router;
