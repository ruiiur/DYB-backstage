import Vue from 'vue'
//import { mapState, mapActions } from 'vuex'
import store from './store/index'
import router from './router'
// import F7 from './common/f7'

// import AMap from 'AMap';
// Vue.use(AMap);
import websocket from './common/websocket'
import tools from './common/tools'
import Device from '@/common/device'

// import 'framework7/dist/js/framework7.min.js'
// import 'framework7/dist/css/framework7.ios.min.css'
// import 'framework7/dist/css/framework7.ios.colors.min.css'
import './assets/css/base.css'
// import './assets/css/mixin.scss'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
Vue.use(iView);
// 引入Framework7S
// Vue.use(F7);
// let $f7 = Vue.prototype.$f7;
// Vue.use(websocket, $f7);
 Vue.config.productionTip = false;

// 路由切换前处理
router.beforeEach((to, from, next) => {
    let title = '点银宝';
    to.matched.forEach((path) => {
        if (path.meta.title) {
            title = `${path.meta.title}`;
        }
    });
    document.title = title;
    // $f7.showIndicator();
    next();
});
// 路由切换后
router.afterEach((to, from) => {
    // $f7.hideIndicator();
    //Device.showStatusBar("#ff8800");
    //Device.setStatusBarTransparent();
});

new Vue({
    el: '#root',
    router: router,
    store: store,
    beforeUpdate: function() {
        let user = JSON.parse(tools.getLocalStorage('USER'));
        this.$store.dispatch('setUserInfo',user);
    }
});
