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
            name: 'guanyu',
            path: '/about',
            component: About
        },
        {
            path: '/home',
            component: Home,
            children: [
                {
                    name: 'News',
                    path: 'news',
                    component: News
                },
                {
                    // name: 'xiaoxi',
                    path: 'message',
                    component: Message,
                    children: [
                        {
                            name: 'xiangqing',
                            path: 'detail/:id/:title',
                            component: Detail,
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