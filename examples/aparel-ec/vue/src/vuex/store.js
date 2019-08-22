import Vue from "vue";
import Vuex from "vuex";
import {
  products,
  categories,
  brands,
  selectProductsByCategory,
  selectProductsByBrand
} from "./state";
import mutation from "./mutation";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    products,
    categories,
    brands,
    selectProductsByCategory,
    selectProductsByBrand
  },
  mutations: mutation
});
