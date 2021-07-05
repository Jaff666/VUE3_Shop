import { createStore } from 'vuex';
import { ProductModule } from "./product";

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    User: ProductModule
  }
})
