import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import 'bootstrap';
// import jQuery from 'jquery';
// window.$ = window.jQuery = require('jquery');
// window.$= window.jQuery = jQuery;
// import jQuery from "jquery";
// const $ = jQuery;
// window.$ = $;
// window.$ = window.jQuery = require("jquery");
import jQuery from 'jQuery';
window.$ = window.jQuery = jQuery;
import 'popper.js'
import './assets/scss/sb-admin-2.scss';
import './assets/vendor/fontawesome-free/css/all.min.css';
// //now you can load the plugins:
// require('./assets/js/demo/chart-area-demo');
// require(’./assets/js/custom.js’);
// "vendor/chart.js/Chart.min.js"
// js/sb-admin-2.min.js
// import './assets/js/sb-admin-2';
// require('./assets/vendor/chart.js/Chart');
// require('./assets/js/demo/chart-area-demo.js');
// require('./assets/js/demo/chart-pie-demo.js');
// Vue.loadScript("/vendor/jquery/jquery.min.js");
// Vue.loadScript("/vendor/bootstrap/js/bootstrap.bundle.min.js");
// Vue.loadScript("/vendor/jquery-easing/jquery.easing.min.js");
// Vue.loadScript("/js/sb-admin-2.min.js");
// Vue.loadScript("/vendor/chart.js/Chart.min.js");
// Vue.loadScript("/js/demo/chart-area-demo.js");
// Vue.loadScript("/js/demo/chart-pie-demo.js");
Vue.component('PageWrapper',require('./components/PageWrapper.vue').default);
Vue.component('Sidebar',require('./components/Sidebar.vue').default);


Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
