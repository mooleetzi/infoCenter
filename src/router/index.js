import Vue from "vue";
import Router from "vue-router";
import index from "@/pages/index";
import allNews from "@/pages/allNews";
import news from "@/pages/news";
import dataDisplay from "@/pages/dataDisplay";
import imgDisplay from "@/pages/imgDisplay";
import allVideo from "@/pages/allVideo";
import contactUs from "@/pages/contactUs";
import videoDisplay from "@/pages/videoDisplay";
Vue.use(Router);

export default new Router({
  // mode:'history'
  routes: [
    {
      path: "/",
      name: "index",
      component: index
    },
    {
      path: "/allNews",
      name: "allNews",
      component: allNews
    },
    {
      path: "/news/:id",
      name: "news",
      component: news
    },
    {
      path: "/dataDisplay",
      name: "dataDisplay",
      component: dataDisplay
    },
    {
      path: "/imgDisplay",
      name: "imgDisplay",
      component: imgDisplay
    },
    {
      path: "/allVideo/:search?",
      name: "allVideo",
      component: allVideo
    },
    {
      path: "/contactUs",
      name: "contactUs",
      component: contactUs
    },
    {
      path: "/video/:id",
      name: "video",
      component: videoDisplay
    }
  ]
});
