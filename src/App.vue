<template>
  <div id="app">
    <div :class="{'Head1 white':$store.state.navType==1&&screenWidth>767,'Head2':$store.state.navType==2}">
      <myHead></myHead>
    </div>
    <transition mode="out-in" appear enter-active-class="animated fadeIn">
      <router-view></router-view>
    </transition>
    <myFoot></myFoot>
  </div>
</template>
<script>
import store from "@/store";
import myFoot from "./components/subCom/myFoot";
import myHead from "./components/subCom/myHead";
export default {
  name: "App",
  created() {
    this.getInfo();
    this.$store.dispatch("getData", {
      url: "/allVedio",
      mutation: "setVideoInfo",
      callback: () => {}
    });
    window.onresize = () => {
      return (() => {
        window.screenHeight = window.innerHeight;
        window.screenWidth = window.innerWidth;
        if (window.screenWidth < 768) this.$store.commit("setNavType", 3);
        this.$store.commit("setHeight", window.screenHeight);
        this.$store.commit("setWidth", window.screenWidth);
      })();
    };
    window.addEventListener(
      "scroll",
      () => {
        return (() => {
          window.scrollTop =
            document.documentElement.scrollTop || document.body.scrollTo;
          this.$store.commit("setScrollTop", window.scrollTop);
        })();
      },
      true
    );
  },
  mounted() {},
  data() {
    return {
      test: true
    };
  },
  methods: {
    getInfo() {
      this.$http("/allNews")
        .then(result => {
          this.$store.commit("setNowPage", result.data);
          console.log("news获取成功");
        })
        .catch(err => {
          console.log("get news info failed");
        });
      // await this.$http("/allImages")
      //   .then(result => {
      //     this.$store.commit("setImage", result.data.results);
      //     console.log("Image获取成功");
      //   })
      //   .catch(err => {
      //     console.log(err);
      //     console.log("get image info failed");
      //   });
      // await this.$http("/allVedio")
      //   .then(result => {
      //     this.$store.commit("setVideoInfo", result.data.results);
      //     console.log(result.data.results);
      //     console.log("video获取成功");
      //   })
      //   .catch(err => {
      //     console.log(err);
      //     console.log("get video info failed");
      //   });
      // await this.$http("/barData")
      //   .then(result => {
      //     this.$store.commit("setMagazine", result.data.results);
      //     console.log(result.data.results);
      //     console.log("magazine获取成功");
      //   })
      //   .catch(err => {
      //     console.log(err);
      //     console.log("get magazine info failed");
      //   });
    }
  },
  computed: {
    screenHeight: {
      get() {
        return this.$store.state.screenHeight;
      },
      set(val) {
        this.$store.commit("setHeight", val);
      }
    },
    screenWidth: {
      get() {
        return this.$store.state.screenWidth;
      },
      set(val) {
        this.$store.commit("setWidth", val);
      }
    },
    scrollTop: {
      get() {
        return this.$store.state.scrollTop;
      },
      set(val) {
        this.$store.commit("setScrollTop", val);
      }
    },
    nowPage() {
      return this.$store.state.nowPage;
    }
  },
  watch: {
    screenHeight(val) {
      this.$store.commit("setHeight");
      this.screenHeight = val;
    },
    scrollTop(val) {
      this.$store.commit("setScrollTop", val);
      this.scrollTop = val;
      if (val >= this.$store.state.bannerHeight && this.screenWidth > 767)
        this.$store.commit("setNavType", 2);
      else if (val < this.screenHeight && this.screenWidth > 767)
        this.$store.commit("setNavType", 1);
      else if (this.screenWidth < 768) this.$store.commit("setNavType", 3);
    },
    screenWidth(val) {
      this.screenWidth = val;
      this.$store.commit("setWidth", val);
      if (
        this.scrollTop >= this.$store.state.bannerHeight &&
        this.screenWidth > 767
      )
        this.$store.commit("setNavType", 2);
      else if (this.scrollTop < this.screenHeight && this.screenWidth > 767)
        this.$store.commit("setNavType", 1);
      else if (this.screenWidth < 768) this.$store.commit("setNavType", 3);
    },
    nowPage() {
      this.$store.commit("setImgInfo", this.nowPage.results);
      this.$store.commit("setBannerImg", this.nowPage.results);
    }
  },
  components: {
    myFoot,
    myHead
  },
  store
};
</script>
<style>
@import "./assets/career/css/bootstrap.css";
@import "./assets/career/css/layers.min.css";
@import "./assets/career/css/font-awesome.min.css";
@import url("./assets/css/style.css");

.Head2 {
  position: fixed;
  width: 100%;
  z-index: 8;
  background-color: #fff;
}

.Head1 {
  position: absolute;
  width: 100%;
  z-index: 8;
}

.white a,
.white h2 {
  color: white !important;
}
</style>
<style lang="less" scoped>
</style>
