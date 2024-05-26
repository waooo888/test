import Vue from 'vue'
import VueRouter from 'vue-router'

//1.引入组件
import Home from '../views/Home.vue'
import User from '../views/User.vue'
import Main from '../views/Main.vue'
import Mall from '../views/Mall.vue'
import PageOne from '@/views/PageOne.vue'
import PageTwo from '@/views/PageTwo.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)
//2.将路由和组件进行映射
const routes = [
    //主路由
    {

        path: '/',
        component: Main,
        name: 'Main',
        redirect: '/home',
        children: [
            // { path: 'home', name: 'home', component: Home },   //首页
            // { path: 'user', name: 'user', component: User },  //用户管理
            // { path: 'mall', name: 'mall', component: Mall },  //商品管理
            // { path: 'pageone', name: 'pageone', component: PageOne },//页面1
            // { path: 'pagetwo', name: 'pagetwo', component: PageTwo }//页面2
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
    }


]

//3.创建router实例
const router = new VueRouter({
    routes
})
//4.对外暴露router
export default router



