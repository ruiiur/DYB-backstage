import Vue from 'vue'
import VueRouter from 'vue-router'

import main from '@/components/main'

Vue.use(VueRouter)
//这是登陆
const login = r => require.ensure([], () => r(require('@/pages/login/login.vue')), 'login');
//这是商家首页
const home = r => require.ensure([], () => r(require('@/pages/home/home.vue')), 'home');
//订单处理
const process = r => require.ensure([], () => r(require('@/pages/order/order-process.vue')), 'process');
//订单查询
const inquiry = r => require.ensure([], () => r(require('@/pages/order/order-inquiry.vue')), 'inquiry');
//店铺设置
const store = r => require.ensure([], () => r(require('@/pages/store/store.vue')), 'store');
//店铺管理
const management = r => require.ensure([], () => r(require('@/pages/store/store-management.vue')), 'management');
//消息中心
const message = r => require.ensure([], () => r(require('@/pages/store/message-center.vue')), 'message');
//店铺装修
const decoration = r => require.ensure([], () => r(require('@/pages/store/store-decoration.vue')), 'decoration');
//新建商品
const newGoods = r => require.ensure([], () => r(require('@/pages/goods/new-goods.vue')), 'newGoods');
//回收站
const recycle = r => require.ensure([], () => r(require('@/pages/goods/recycle-bin.vue')), 'recycle');
//批量上传照片
const upload = r => require.ensure([], () => r(require('@/pages/goods/upload-pictures.vue')), 'upload');
//账号设置
const account = r => require.ensure([], () => r(require('@/pages/system/account-setting.vue')), 'account');
//顾客评价
const evaluation = r => require.ensure([], () => r(require('@/pages/after-sale/customer-evaluation.vue')), 'evaluation');
//恶意评价举报
const report = r => require.ensure([], () => r(require('@/pages/after-sale/report-malicious.vue')), 'report');
//平台活动
const platform = r => require.ensure([], () => r(require('@/pages/marketing/platform-activity.vue')), 'platform');
//店铺活动
const storeA = r => require.ensure([], () => r(require('@/pages/marketing/store-activity.vue')), 'storeA');
//折扣商品
const discount = r => require.ensure([], () => r(require('@/pages/marketing/discount-goods.vue')), 'discount');
//精准营销
const precision = r => require.ensure([], () => r(require('@/pages/marketing/precision-marketing.vue')), 'precision');

const router = new VueRouter({
  routes: [
    {
       path: '/',
       redirect: '/login'
    },
    {
      path:'/login',
      component: login,
    },
    {
      path: '/home',
      name: 'main',
      component: main,
      children: [
        //商家首页
        {path:'/',component: home},
        //订单处理
        { path: '/process', component: process },
        //订单查询
        { path: '/inquiry', component: inquiry },
        //店铺设置
        { path: '/store', component: store },
        //店铺管理
        { path: '/management', component: management },
        //消息中心
        { path: '/message', component: message },
        //店铺装修
        { path: '/decoration', component: decoration },
        //新建商品
        { path: '/newGoods', component: newGoods },
        //回收站
        { path: '/recycle', component: recycle },
        //批量上传图片
        { path: '/upload', component: upload },
        //账号设置
        { path: '/account', component: account },
        //顾客评价
        { path: '/evaluation', component: evaluation ,
        },
        //恶意评价举报
        { path: '/report', component: report },
        //平台活动
        { path: '/platform', component: platform },
        //店铺活动
        { path: '/storeA', component: storeA },
        //折扣商品
        { path: '/discount', component: discount },
        //精准营销
        { path: '/precision', component: precision }
      ]
    },
]
});

export default router
