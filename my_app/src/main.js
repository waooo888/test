import Vue from 'vue'
import App from './App.vue'
//引入element
import ElenmentUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import store from './store/index'
import './api/moke'
import Cookie from 'js-cookie';


Vue.use(ElenmentUI)
//引入router
import router from './router/index'
Vue.config.productionTip = false

//添加全局前置导航守卫
router.beforeEach((to, from, next) => {
  //判断token存不存在
  const token = Cookie.get('token')
  if (!token && to.name !== 'login') {
    //token不存在应该跳转至登录项
    next({ name: 'login' })
  }
  else if (token && to.name === 'login') {
    //token存在，说明用户登录，此时跳转至首页
    next({ name: 'home' })
  } else {
    next()
  }

})

new Vue({
  router,//挂载引入的router
  store,//挂载引入的store
  created() {
    store.commit('addMenu', router)
  },
  render: h => h(App),
}).$mount('#app')
