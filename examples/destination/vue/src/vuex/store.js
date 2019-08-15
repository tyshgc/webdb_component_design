import Vue from "vue";
import Vuex from "vuex";
import { editDestination, destination } from "./state";
import mutation from "./mutation";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    destination,
    editDestination
  },
  mutations: mutation,
});
