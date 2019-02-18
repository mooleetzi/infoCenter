<template>
  <div class="video-container">
    <div class="video-container-wraper">
      <div class="swiper-container-video">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item, index) in video" :key="index">
            <router-link :to="'/video/'+item.id" style="z-index:10">
              <img :src="item.vedio_img" alt="" width="100%">
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="my-button">
      <router-link to="/allVideo">
        <el-button>点击进入视频专区</el-button>
      </router-link>
    </div>
  </div>
</template>
<style lang="less" scoped>
.video-container {
  width: 100%;
  height: 120vh;
  position: relative;
  background-color: #434a54;
  .swiper-container-video {
    position: absolute;
    width: 576px;
    height: 345px;
    padding-top: 1.5rem;
    left: 50%;
    margin-left: -288px;
    overflow: hidden;
    @media screen and (max-width: 767px) {
      transform: scale(0.9);
      height: 360px;
      width: 640px;
      margin-left: -320px;
      padding-top: 0.2rem;
    }
    @media screen and (max-width: 376px) {
      transform: scale(0.9);
      height: 312px;
      width: 380px;
      margin-left: -190px;
      padding-top: 6.5rem;
    }
  }
  &-wraper {
    background: url("./../../assets/career/img/mockups/desktop.svg") no-repeat;
    width: 100%;
    height: 462px;
    overflow: hidden;
    background-size: contain;
    background-position: center;
    @media screen and (max-width: 767px) {
      transform: scale(0.9);
    }
    position: absolute;
    top: 10%;
  }
  .my-button {
    position: absolute;
    width: 10rem;
    left: 50%;
    margin-left: -5rem;
    bottom: 10%;
  }
  .swiper-slide {
    pointer-events: none;
  }
}
</style>
<script>
import Swiper from "swiper";
export default {
  name: "myVideo",
  data() {
    return {
      video: []
    };
  },
  methods: {
    getVideo() {
      this.videoInfo.results.forEach(element => {
        this.video.push(element);
      });
    }
  },
  created() {
    if (!this.videoInfo)
      this.$store.dispatch("getData", {
        url: "/allVedio",
        mutation: "setVideoInfo",
        callback: this.getVideo
      });
  },
  mounted() {
    new Swiper(".swiper-container-video", {
      loop: true,
      autoplay: {
        delay: 2000
      },
      effect: "fade",
      fadeEffect: {
        crossFade: true
      }
    });
  },
  computed: {
    videoInfo() {
      return this.$store.state.videoInfo;
    }
  }
};
</script>
