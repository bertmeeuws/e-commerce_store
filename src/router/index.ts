import { ClothingItem } from "./../interfaces/ClothingItem.types";
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Collection from "../views/Shop/Collection.vue";
import NotFound from "../views/Misc/NotFound.vue";
import ClothingDetail from "../views/Shop/ClothingDetail.vue";
import Cart from "../views/Cart/Cart.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
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
    path: "/cart",
    name: "Cart",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Cart,
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
  history: createWebHashHistory(),
  routes,
});

export default router;
