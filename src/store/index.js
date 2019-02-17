import Vue from "vue";
import Vuex from "vuex";

// 引入 axios
import axios from "axios";
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    navInfo: [
      {
        name: "首页",
        url: "/"
      },
      {
        name: "新闻",
        url: "/allNews"
      },
      {
        name: "漫画大数据",
        url: "/dataDisplay"
      },
      {
        name: "创意空间",
        url: "/imgDisplay"
      },
      {
        name: "视频",
        url: "/allVideo"
      },
      {
        name: "联系我们",
        url: "/contactUs"
      }
    ],
    screenHeight: window.innerHeight,
    scrollTop: 0,
    screenWidth: window.innerWidth,
    bannerImg: null,
    nowPage: null,
    images: null,
    Passage: null,
    dmInfo: null,
    videoInfo: null,
    magazine: null,
    barData: null,
    navType: 1,
    bannerHeight: window.innerHeight
  },
  mutations: {
    setBarData(state, val) {
      state.barData = val;
    },
    setMagazine(state, val) {
      state.magazine = val;
    },
    setNowPage(state, val) {
      state.nowPage = val;
    },
    setImgInfo(state, val) {
      state.imgInfo = val;
    },
    setDmInfo(state, val) {
      state.dmInfo = val;
    },
    setBannerImg(state, val) {
      state.bannerImg = val;
    },
    setVideoInfo(state, val) {
      state.videoInfo = val;
    },
    setHeight(state, val) {
      state.screenHeight = val;
    },
    setScrollTop(state, val) {
      state.scrollTop = val;
    },
    setWidth(state, val) {
      state.screenWidth = val;
    },
    setShowNav(state, val) {
      state.showNav = val;
    },
    setImages(state, val) {
      state.images = val;
    },
    setNavType(state, val) {
      state.navType = val;
    },
    setBannerHeight(state, val) {
      state.bannerHeight = val;
    }
  },
  actions: {
    async getData(context, { url, mutation, callback }) {
      await axios
        .get(url)
        .then(r => {
          if (url == "/allImages" || url == "/allVedio")
            context.commit(mutation, r.data);
          else {
            context.commit(mutation, r.data.results);
          }
        })
        .catch(e => {
          console.log(e);
        });
      callback();
    }
  }
});

export default store;
