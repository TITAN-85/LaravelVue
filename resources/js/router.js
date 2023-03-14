import VueRouter from "vue-router";

import Vue from 'vue'

Vue.use(VueRouter);

import Index from "./views/Index";
import Welcome from "./views/Welcome";
import MonCellier from "./views/MonCellier";

const routes = [
    {
        path: "/",
        component: Index
    },
    {
        path: "/welcome",
        component: Welcome
    },
    {
        path: "/mon-cellier",
        component: MonCellier
    }
]

export default new VueRouter({
    mode: "history",
    routes: routes
});