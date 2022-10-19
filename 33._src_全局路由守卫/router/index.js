//该文件用于创建整个应用的路由器
import VueRouter from 'vue-router'

import About from '../components/pages/About'
import Home from '../components/pages/Home'
import News from '../components/pages/News'
import Message from '../components/pages/Message'
import Detail from '../components/pages/Detail'

const router = new VueRouter({
    routes: [
        {
            name: 'guanyu',
            path: '/about',
            component: About,
            meta: { title: '关于' }
        },
        {
            name: 'zhuye',
            path: '/home',
            component: Home,
            meta: { title: '主页' },
            children: [
                {
                    name: 'xinwen',
                    path: 'news',
                    component: News,
                    meta: { isAuth: true, title: '新闻' },
                    //独享路由守卫
                    /* beforeEnter: (to, from, next) => {
                        if (to.meta.isAuth) {
                            if (localStorage.getItem('school') === 'atguigu1') {
                                next()
                            } else {
                                alert("学校名错误")
                            }
                        } else {
                            next()
                        }
                    } */
                },
                {
                    name: 'xiaoxi',
                    path: 'message',
                    component: Message,
                    meta: { isAuth: true, title: '消息' },
                    children: [
                        {
                            name: 'xiangqing',
                            path: 'detail/:id/:title',
                            component: Detail,
                            meta: { isAuth: true, title: '详情' },
                            // props，布尔值，为真则将该路由组件收到的所有params参数，以props形式传给Detail组件
                            // props:true
                            // props，值为函数
                            props($route) {
                                return { id: $route.params.id, title: $route.params.title }
                            }
                        }
                    ]
                }
            ]
        }
    ]
})

//全局前置路由守卫——初始化之前被调用、每次路由切换之前被调用
router.beforeEach((to, from, next) => {
    console.log('前置路由守卫', to, from);
    if (to.meta.isAuth) {
        if (localStorage.getItem('school') === 'atguigu') {
            next()
        } else {
            alert("学校名错误")
        }
    } else {
        next()
    }
})

router.afterEach((to, from) => {
    console.log('后置路由守卫', to, from);
    document.title = to.meta.title || '硅谷系统'
})

export default router