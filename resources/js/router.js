import VueRouter from "vue-router";

import Vue from 'vue'

Vue.use(VueRouter);

import Header from "./views/Header";
import Welcome from "./views/Welcome";
import login from "./views/auth/Index";

const routes = [
    {
        path: "/",
        component: Header
    },
    {
        path: "/welcome",
        component: Welcome
    },
    {
        path: "/login",
        component: Header,
        component: login
    }
]

export default new VueRouter({
    mode: "history",
    routes: routes
});
