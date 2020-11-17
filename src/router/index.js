import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import button from "../components/button/mainbutton.vue";
// import buttoncoll from "../components/otherpages/buttoncoll.vue";
// import BeginPageContent from "../components/Content/BeginPageContent.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component:Dashboard,
    // children:[
    //   {
    //     path: "button",
    //     name: "button",
    //     component:button,
    //   }
    // ],
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },

  {
    path: "/button",
    name: "button",
    component: button
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
