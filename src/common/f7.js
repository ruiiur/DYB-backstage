const state = {
    root: "#root",
    pushState: true,
    swipePanel: 'left',
    modalButtonCancel: '取消',
    modalButtonOk: '确定',
    activeState: true,
    imagesLazyLoadSequential: true,
    imagesLazyLoadThreshold: 10,
    fastClicks: true
}

export default {
    install: function (Vue) {
        let app = new Framework7(state);
        Dom7(document).on('touchend', '.button.active-state', (e) => Dom7(e.target).removeClass('active-state'));
        Vue.prototype.$f7 = app;
        Vue.prototype.Dom7 = Dom7;
    }
}