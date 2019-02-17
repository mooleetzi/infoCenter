<template>
    <div class="create-container">
        <div class="create-container-title">
            <h2 class="white" v-if="screenWidth>767">创意空间</h2>
            <h3 class="white" v-else>创意空间</h3>
            <p v-text="info" class="white"></p>
            <div class="my-create-button">
                <router-link to="/imgDisplay">
                    <el-button>点击进入图片专区</el-button>
                </router-link>
            </div>
        </div>
    </div>
</template>
<style lang="less" scoped>
.create-container {
  width: 100%;
  height: 100vh;
  @media screen and (max-width: 767px) {
    height: 60vh;
  }
  position: relative;
  background-color: #4fcead;
  &-title {
    position: absolute;
    width: 35%;
    left: 15%;
    top: 15%;
    @media screen and (max-width: 767px) {
      width: 80%;
      left: 10%;
      top: 10%;
      & p {
        font-size: 0.8rem;
      }
    }
  }
}
</style>
<script>
export default {
  name: "myImage",
  data() {
    return {
      info:
        "我们致力于图片的修饰与美化，海报的创意制作与宣传单的设计，赋予复杂的就业数据美的特性并直观呈现，创意与美的结合，成就一场灵感的自由释放。"
    };
  },
  computed: {
    screenWidth() {
      return this.$store.state.screenWidth;
    }
  }
};
</script>
