//引入Vue
import Vue from 'vue'
//引入App组件，它是所有组件的父组件
import App from './App.vue'
import { Button, Select } from 'element-ui';

//关闭vue的生产提示
Vue.config.productionTip = false
Vue.use(Button)
Vue.use(Select)
//创建Vue实例对象---vm
new Vue({
    el: '#app',
    render: h => h(App),
})