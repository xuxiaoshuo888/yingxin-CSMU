import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'login',
            component: () => import('./views/login/login.vue')
        },
        {
            path: '/notice',
            name: 'notice',
            component: () => import('./views/notice/notice.vue')
        },
        {
            path: '/desk',
            name: 'desk',
            component: () => import('./views/desk/desk.vue')
        },
        {
            path: '/hcyhk',
            name: 'hcyhk',
            component: () => import('./views/hcyhk/hcyhk.vue')
        },
        {
            path: '/fees',
            name: 'fees',
            component: () => import('./views/fees/fees.vue')
        },
        {
            path: '/greenPath',
            name: 'greenPath',
            component: () => import('./views/greenPath/greenPath.vue')
        },
        {
            path: '/greenPath/pdf',
            name: 'pdf',
            component: () => import('./views/greenPath/pdf.vue')
        },
        {
            path: '/room',
            name: 'room',
            component: () => import('./views/room/room.vue')
        },
        {
            path: '/roomList',
            name: 'roomList',
            component: () => import('./views/room/roomList.vue')
        },
        {
            path: '/card',
            name: 'card',
            component: () => import('./views/card/card.vue')
        },
        {
            path: '/regist',
            name: 'regist',
            component: () => import('./views/regist/regist.vue')
        },
        {
            path: '/clothes',
            name: 'clothes',
            component: () => import('./views/clothes/clothes.vue')
        },
        {
            path: '/person',
            name: 'person',
            component: () => import('./views/person/person.vue')
        },
        {
            path: '/safe',
            name: 'safe',
            component: () => import('./views/safe/safe.vue')
        },
        {
            path: '/search',
            name: 'search',
            component: () => import('./views/search/search.vue')
        },
        // {//地大，完成注册-
        //     path: '/complete',
        //     name: 'complete',
        //     component: () => import('./views/complete/complete.vue')
        // },
        // {//地大完成注册-请假
        //     path: '/complete/qj',
        //     name: 'qj',
        //     component: () => import('./views/complete/qj.vue')
        // },
        {//选手机号-长沙医
            path: '/phone',
            name: 'phone',
            component: () => import('./views/phone/phone.vue')
        },
        {//完成注册后看到的-长沙医
            path: '/done',
            name: 'done',
            component: () => import('./views/done/done.vue')
        }
    ]
})
