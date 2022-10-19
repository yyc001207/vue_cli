//引入Vue
import Vue from 'vue'
//引入App组件，它是所有组件的父组件
import App from './App.vue'
//引入
import VueRouter from 'vue-router'

import router from './router/index'
//关闭vue的生产提示
Vue.config.productionTip = false

Vue.use(VueRouter)
//创建Vue实例对象---vm
new Vue({
    el: '#app',
    render: h => h(App),
    router,
})