<template>
  <div class="video-container">
    <my-slide :height="$store.state.screenWidth>767?82:62" :imgType="2" :bannerImg="bannerImg"></my-slide>
    <my-video-display :next="nextId" :prev="prevId" :nowVideo="nowVideo"></my-video-display>
  </div>
</template>
<style lang="less" scoped>
.video {
  &-container {
    position: relative;
    width: 100%;
  }
}
</style>
<script>
import mySlide from "./../components/subCom/mySlide.vue";
import myVideoDisplay from "./../components/video/myVideoDisplay.vue";
export default {
  name: "myVideo",
  data() {
    return {
      bannerImg: [
        {
          passage_img: require("./../assets/career/img/news/摄影.jpg"),
          first: "Materials collecting Department",
          second: "记录现场事实,捕捉精彩瞬间，带来艺术享受是我们的最终目标"
        },
        {
          passage_img: require("./../assets/career/img/news/摄影2.jpeg"),
          first: "Materials collecting Department",
          second: "记录现场事实,捕捉精彩瞬间，带来艺术享受是我们的最终目标"
        }
      ]
    };
  },
  methods: {},
  components: {
    mySlide,
    myVideoDisplay
  },
  computed: {
    nextId() {
      if (this.nowId == this.videoInfo.length) return -1;
      return this.nowId + 1;
    },
    nowId() {
      return parseInt(this.$route.params.id);
    },
    prevId() {
      return this.nowId - 1;
    },
    videoInfo() {
      return this.$store.state.videoInfo.results;
    },
    nowVideo() {
      return this.videoInfo[this.nowId - 1];
    }
  },
  watch: {
    nowId() {}
  }
};
</script>
