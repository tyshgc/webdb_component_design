import Vue from "vue";
import Router from "vue-router";

// Screens
import {
  BrandDetailScreen,
  BrandsScreen,
  CategoriesScreen,
  CategoryDetailScreen,
  HomeScreen,
  ProductsScreen
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
      path: "/product",
      name: "products",
      component: ProductsScreen
    },
    {
      path: "/category",
      name: "category",
      component: CategoriesScreen
    },
    {
      path: "/category/:label",
      name: "categoryDetail",
      component: CategoryDetailScreen,
      props: route => ({ label: route.params.label })
    },
    {
      path: "/brand",
      name: "brand",
      component: BrandsScreen
    },
    {
      path: "/brand/:label",
      name: "brandDetail",
      component: BrandDetailScreen,
      props: route => ({ label: route.params.label })
    }
  ]
});
