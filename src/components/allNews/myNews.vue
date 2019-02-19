<template>
  <div class="video-container">
    <div class="video-main">
      <div class="video-main-item" v-for="(item, i) in img" :key="i" v-show="!flag||i in searchShow">
        <div class="video-main-item-img">
          <img :src="item" alt="" width="100%">
        </div>
        <div class="video-main-item-title">
          <router-link :to="'/news/'+id[i]">
            <h2>{{title[i]}}</h2>
          </router-link>
          <div class="video-main-item-info">
            <a href="#">文章类型</a>：
            <span>{{type[i]}}</span>-{{time[i]|timeFormatter}}
          </div>
          <p>{{content[i]|strNum}}</p>
        </div>
        <div></div>
      </div>
      <div class="video-btn">
        <div class="video-btn-left">
          <el-button @click="prevPage">
            <i class="fa fa-chevron-left"></i>
            <span v-if="nowPage&&!nowPage.previous">暂无</span>
          </el-button>
        </div>
        <div class="video-btn-right">
          <el-button @click="nextPage">
            <span v-if="nowPage&&!nowPage.next">暂无</span>
            <i class="fa fa-chevron-right"></i>
          </el-button>
        </div>
      </div>
    </div>
    <div class="video-aside">
      <div class="video-aside-search">
        <span class="pre-input">
          <i class="icon icon-search"></i>
        </span>
        <input type="text" v-model="searching" @keyup.enter="goSearch" placeholder="Search...">
      </div>
      <div class="video-aside-about">
        <h4>新闻</h4>
        <p>闻中有新，妙笔生花，务实求真，一根笔杆，一双眼睛，一对耳朵，用心去听，用心去写，用全部力气和心血造就的每篇新闻。文字即力量。</p>
      </div>
      <div class="video-aside-magazine">
        <h4>杂志板块</h4>
        <a :href="mgUrl">
          <img :src="mgImg" alt="">
        </a>
        <p>{{mgTitle}}</p>
      </div>
    </div>
    <div style="padding:2rem"></div>
  </div>
</template>
<style lang="less" scoped src="./../../assets/less/myVideo.less">
.video-main-item-info {
  padding-top: -1rem;
}
</style>
<script>
export default {
  name: "myNews",
  created() {
    if (!this.magazine) {
      let myurl = "/allMagazine";
      let mutation = "setMagazine";
      this.$store.dispatch("getData", {
        url: myurl,
        mutation: mutation,
        callback: this.passage ? this.getInfo : () => {}
      });
    }
  },
  mounted() {
    if (this.magazine && this.passage) this.getInfo();
  },
  data() {
    return {
      flag: true,
      searching: "",
      searchShow: [],
      content: [],
      img: [],
      title: [],
      id: [],
      type: [],
      time: [],
      mgUrl: "",
      mgImg: "",
      mgTitle: ""
    };
  },
  filters: {
    timeFormatter(data) {
      let time = new Date(data);
      let y = time.getFullYear();
      let m = time.getMonth() + 1;
      let d = time.getDate();
      return `${y}年${m}月${d}日`;
    },
    strNum(data, str) {//字符数量过滤器
      if (data) return data.substring(0, 80);
    }
  },
  methods: {
    getInfo() {//获取信息
      let i = 0;
      this.content = [];
      this.img = [];
      this.title = [];
      this.id = [];
      this.type = [];
      this.time = [];
      (this.searchShow = []), (this.mgUrl = this.magazine[0].magazine);
      this.mgImg = this.magazine[0].cover;
      this.mgTitle = this.magazine[0].title;
      while (i < this.passage.length) {
        let filename = this.passage[i].content;
        $.ajax({//ajax异步获取新闻内容
          async: true,
          url: filename,
          contentType: "text/json,charset=utf-8",
          scriptCharset: "utf-8",
          success: result => {
            this.content.push(result);
            // console.log(result);
          }
        });
        this.title.push(this.passage[i].title);
        this.img.push(this.passage[i].passage_img);
        this.id.push(this.passage[i].id);
        this.type.push(this.passage[i].Type);
        this.time.push(this.passage[i].passage_time);
        i++;
      }
      this.initSearch();
    },
    prevPage() {//重新绑定页面数据
      if (this.nowPage.previous)
        this.$store.commit("setNowPage", this.nowPage.previous);
    },
    nextPage() {
      if (this.nowPage.next)
        this.$store.commit("setNowPage", this.nowPage.next);
    },
    open() {//elementUI 信息通知组件
      const h = this.$createElement;
      this.$notify({
        title: "tips",
        message: h("i", { style: "color: teal" }, "无此项搜索结果哦"),
        duration: 1500
      });
    },
    goSearch() {//路由切换
      this.$router.push({ path: "/allNews/" + this.searching });
    },
    initSearch() {//初始化路由参数里的搜索信息
      // console.log("来了");
      if (this.search) {
        this.searchShow = [];
        this.content.forEach((x, i) => {
          if (
            x.indexOf(this.search) != -1 ||
            this.title[i].indexOf(this.search) != -1
          )
            this.searchShow.push(i);
          // console.log(x, this.search);
        });
        if (this.searchShow.length == 0) {
          this.open();
          this.flag = false;
        } else this.flag = true;
      } else {
        // console.log("没有");
        this.flag = false;
      }
    }
  },
  computed: {
    passage() {
      return this.$store.state.bannerImg;
    },
    nowPage() {
      return this.$store.state.nowPage;
    },
    magazine() {
      return this.$store.state.magazine;
    },
    search() {
      return this.$route.params.search;
    }
  },
  watch: {
    passage() {
      if (this.magazine) this.getInfo();
    },
    magazine() {
      if (this.passage) this.getInfo();
    },
    search() {
      this.initSearch();
    },
    searching() {
      if (!this.searching) this.flag = false;
    }
  }
};
</script>
