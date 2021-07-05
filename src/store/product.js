export const ProductModule = {
    namespaced: true,

    state: {
        product: null
    },

    mutations: {
        SET_PRODUCT(state, product) {
            state.product = product;
        }
    },

    actions: {
        setUser({ commit }, product) {
            commit('SET_PRODUCT', product);
        }
    }
}