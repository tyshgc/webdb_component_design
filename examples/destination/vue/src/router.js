import Vue from "vue";
import Router from "vue-router";

// Screens
import {
  DestinationScreen,
  DestinationRegistrationScreen,
  HomeScreen 
} from "@/components/screens";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeScreen
    },
    {
      path: "/reference",
      name: "reference",
      component: DestinationScreen
    },
    {
      path: "/registration",
      name: "registration",
      component: DestinationRegistrationScreen
    },
  ]
});
