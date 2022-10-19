//该文件用于创建整个应用的路由器
import VueRouter from 'vue-router'

import About from '../components/pages/About'
import Home from '../components/pages/Home'
import News from '../components/pages/News'
import Message from '../components/pages/Message'
import Detail from '../components/pages/Detail'

export default new VueRouter({
    routes: [
        {
            path: '/about',
            component: About
        },
        {
            path: '/home',
            component: Home,
            children: [
                {
                    path: 'news',
                    component: News
                },
                {
                    path: 'message',
                    component: Message,
                    children: [
                        {
                            path: 'detail',
                            component: Detail,
                        }
                    ]
                }
            ]
        }
    ]
})