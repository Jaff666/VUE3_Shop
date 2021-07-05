import { createRouter, createWebHistory } from 'vue-router';
import cart from "../views/cart.vue";
import productsList from "../views/productsList.vue";
import home from "../views/home.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: home
    },
    {
        path: "/productsList",
        name: "productsList",
        component: productsList
    },
    {
        path: "/cart",
        name: 'cart',
        component: cart,
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router