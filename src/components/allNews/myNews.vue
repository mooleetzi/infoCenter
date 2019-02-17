<template>
  <div class="news-container" v-if="passage">
    <div class="news-other hidden-xs">
      <div style="position:relative">
        <div class="news-other-search">
          <span class="pre-input">
            <i class="icon icon-search"></i>
          </span>
          <input type="text" placeholder="Search..." ref="search" v-model="searching" class="plain buffer" @keyup.enter="goSearch">
        </div>
      </div>
      <div class="news-other-new">
        <h4>新闻</h4>
        <p>闻中有新，妙笔生花，务实求真，一根笔杆，一双眼睛，一对耳朵，用心去听，用心去写，用全部力气和心血造就的每篇新闻。文字即力量。</p>
      </div>
      <div class="news-other-magazine">
        <h4>杂志板块</h4>
        <a :href="mgUrl">
          <img :src="mgImg" alt="">
        </a>
        <p>{{mgTitle}}</p>
      </div>
    </div>
    <div class="news-outer hidden-xs" v-for="(item, i) in img" :key="i" v-show="!search||i in searchShow">
      <div class="news-img">
        <img :src="img[i]" alt="" width="100%">
      </div>
      <div class="news-title">
        <router-link :to="'news/'+id[i]">
          <h2>{{title[i]}}</h2>
        </router-link>
      </div>
      <div class="news-info">
        <a href="#">文章类型</a>：{{type[i]}}- {{time[i]|timeFormatter}}
      </div>
      <div class="news-content">
        <p> {{content[i]|strNum}}</p>
      </div>
    </div>
    <div class="news-outer-pe visible-xs" v-for="(item, i) in img" :key="item" v-show="!search||i in searchShow">
      <div class="news-img-pe">
        <img :src="img[i]" alt="" width="100%">
      </div>
      <div class="news-title-pe">
        <router-link :to="'news/'+id[i]">
          <h3>{{title[i]}}</h3>
        </router-link>
      </div>
      <div class="news-info-pe">
        <a href="#">文章类型</a>：{{type[i]}}- {{time[i]|timeFormatter}}
      </div>
      <div class="news-content-pe">
        <p> {{content[i]|strNum}}</p>
      </div>
    </div>
    <div class="news-btn">
      <div class="news-btn-left">
        <el-button @click="prevPage">
          <i class="fa fa-chevron-left"></i>
          <span v-if="!nowPage.previous">暂无</span>
        </el-button>
      </div>
      <div class="news-btn-right">
        <el-button @click="nextPage">
          <span v-if="!nowPage.next">暂无</span>
          <i class="fa fa-chevron-right"></i>
        </el-button>
      </div>
    </div>
    <div class="news-other-pe visible-xs">
      <div style="position:relative">
        <div class="news-other-search">
          <span class="pre-input">
            <i class="icon icon-search"></i>
          </span>
          <input type="text" placeholder="Search..." ref="search" v-model="searching" class="plain buffer" @keyup.enter="goSearch">
        </div>
      </div>
      <div class="news-other-new-pe">
        <h5>新闻</h5>
        <p>闻中有新，妙笔生花，务实求真，一根笔杆，一双眼睛，一对耳朵，用心去听，用心去写，用全部力气和心血造就的每篇新闻。文字即力量。</p>
      </div>
      <div class="news-other-magazine-pe">
        <h5>杂志板块</h5>
        <a :href="mgUrl">
          <img :src="mgImg" alt="">
        </a>
        <p>{{mgTitle}}</p>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped src="./../../assets/less/allNews_myNews.less">
</style>
<script>
export default {
  name: "myNews",
  created() {
    if (!this.magazine) {
      let myurl = "/allMagazine";
      let mutation = "setMagazine";
      this.$store.dispatch("getData", { url: myurl, mutation: mutation, callback: this.passage?this.getInfo :()=>{}});
    }
  },
  mounted() {
    if (this.magazine&&this.passage)
      this.getInfo();
  },
  data() {
    return {
      search: null,
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
    strNum(data, str) {
      if (data) return data.substring(0, 80);
    }
  },
  methods: {
    getInfo() {
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
        $.ajax({
          async: true,
          url: filename,
          contentType: "text/json,charset=utf-8",
          scriptCharset: "utf-8",
          success: result => {
            this.content.push(result);
            console.log(result);
          }
        });
        this.title.push(this.passage[i].title);
        this.img.push(this.passage[i].passage_img);
        this.id.push(this.passage[i].id);
        this.type.push(this.passage[i].Type);
        this.time.push(this.passage[i].passage_time);
        i++;
      }
    },
    prevPage() {
      if (this.nowPage.previous)
        this.$store.commit("setNowPage", this.nowPage.previous);
    },
    nextPage() {
      if (this.nowPage.next)
        this.$store.commit("setNowPage", this.nowPage.next);
    },
    goSearch() {
      this.search = this.searching;
      this.searchShow = [];
      this.content.forEach((x, i) => {
        if (
          x.indexOf(this.search) != -1 ||
          this.title[i].indexOf(this.search) != -1
        )
          this.searchShow.push(i);
      });
      if (this.searchShow.length == 0) {
        alert("无此项搜索结果哦");
        this.search = null;
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
    }
  },
  watch: {
    passage() {
      if (this.magazine) this.getInfo();
    },
    magazine() {
      if (this.passage) this.getInfo();
    },
    searching() {
      if (this.searching == "") this.search = null;
    }
  },
};

</script>
