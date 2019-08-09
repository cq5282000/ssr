// router.js
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export function createRouter() {
    return new Router({
        mode: 'history',
        routes: [
            { path: '/', component: () => import('./components/Index.vue'), meta: { title: '首页' } },
            { path: '/index', component: () => import('./components/Index.vue'), meta: { title: '首页' } },
            { path: '/user/login', component: () => import('./components/User/Login.vue'), meta: { title: '登录' } },
            { path: '/user/register', component: () => import('./components/User/Register.vue'), meta: { title: '注册' } },
            { path: '/help', component: () => import('./components/Help/Index.vue'), meta: { title: '帮助中心' } },
            { path: '/info', component: () => import('./components/Info/Index.vue'), meta: { title: '信息披露' } },
            { path: '/product', component: () => import('./components/Product/Index.vue'), meta: { title: '产品介绍' } },
            { path: '/hello/:id', component: () => import('./components/HelloWorld.vue'), meta: { title: '你好' } }
        ]
    })
}
