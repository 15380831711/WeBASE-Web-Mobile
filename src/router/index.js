import { createRouter, createWebHashHistory } from "vue-router";
import Layout from '@/layout'
import SubLayout from '@/layout/sub'
// import Tabbar from '@/tabbar'
const routes = [
    {
        path: '/',
        redirect: '/home',
    },
    {
        path: "/login",
        name: "Login",
        component: () => import("@/views/login/index.vue")
    },
    {
        path: '/',
        component: Layout,
        children: [
            {
                path: 'home',
                component: () => import("@/views/home/index.vue"),
                name: 'home',
                meta: { title: '首页' }
            }
        ]
        
    },
    {
        path: '/',
        component: SubLayout,
        children: [
            {
                path: 'txInfo',
                component: () => import("@/views/txInfo/index.vue"),
                name: 'TxInfo',
                meta: { title: '交易列表' }
            }
        ]
        
    },
    {
        path: '/',
        component: SubLayout,
        children: [
            {
                path: 'blockInfo',
                component: () => import("@/views/blockInfo/index.vue"),
                name: 'BlockInfo',
                meta: { title: '区块列表' }
            }
        ]

    },
    {
        path: '/',
        component: SubLayout,
        children: [
            {
                path: 'nodeInfo',
                component: () => import("@/views/nodeInfo/index.vue"),
                name: 'NodeInfo',
                meta: { title: '节点列表' }
            }
        ]

    },
    {
        path: '/',
        component: SubLayout,
        children: [
            {
                path: 'my',
                component: () => import("@/views/my/index.vue"),
                name: 'My',
                meta: { title: '我的' }
            }
        ]
    },
    {
        path: '/',
        component: SubLayout,
        children: [
            {
                path: 'block',
                component: () => import('@/views/block/index.vue'),
                name: 'Block',
                meta: { title: '区块详情' }
            }
        ]
    },
    {
        path: '/',
        component: SubLayout,
        children: [
            {
                path: 'transaction',
                component: () => import('@/views/transaction/index'),
                name: 'Transaction',
                meta: { title: '交易详情' }
            }
        ]
    },
    {
        path: '/',
        component: SubLayout,
        children: [
            {
                path: 'search',
                component: () => import('@/views/search/index'),
                name: 'Search',
                meta: { title: '搜索' }
            }
        ]
    },
    {
        path: '/',
        component: SubLayout,
        children: [
            {
                path: 'set',
                component: () => import('@/views/set/index'),
                name: 'Set',
                meta: { title: '设置' }
            }
        ]
    },
    {
        path: '/',
        component: SubLayout,
        children: [
            {
                path: 'contract',
                component: () => import('@/views/contract/index'),
                name: 'Contract',
                meta: { title: '合约列表' }
            }
        ]
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;
