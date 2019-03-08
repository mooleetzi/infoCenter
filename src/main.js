// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import axios from "axios";
import qs from "qs";
import VueAxios from "vue-axios";
import vuex from "vuex";
import $ from "jquery";
import animate from "animate.css";
import store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/base.css";
import "element-ui/lib/theme-chalk/index.css";
import echarts from "echarts";
import preview from "vue-photo-preview";
import "vue-photo-preview/dist/skin.css";
import VueVideoPlayer from "vue-video-player";
import "video.js/dist/video-js.css";
import VueLazyload from "vue-lazyload";
import cors from 'cors';
Vue.use(VueLazyload);
Vue.use(VueVideoPlayer);
Vue.use(preview);
Vue.use(cors);
Vue.config.productionTip = false;
// axios.defaults.baseURL = "http://127.0.0.1:8000/API";
// axios.defaults.baseURL="http://89.208.252.18:8000/API";
axios.defaults.baseURL="http://www.cdutzy.com/API";
Vue.prototype.$http = axios;
Vue.prototype.$echarts = echarts;
Vue.prototype.qs = qs;
Vue.use(ElementUI);
Vue.use(VueAxios, axios, vuex);
Vue.config.devtools = true; //allow local vue-devtools get data from there
/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  components: {
    App,
  },
  template: "<App></App>"
});
