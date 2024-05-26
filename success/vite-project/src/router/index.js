import Vue from "vue";

import VueRouter from "vue-router";

import Main from '../view/Main.vue'
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Main',
        meta: { title: '首页' },
        component: Main
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})
export default router