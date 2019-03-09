<template>
  <div class="real-time-info">
    <div class="real-time-main">
      <h4>微关注</h4>
    </div>
    <div class="real-time-btn">
      <el-button type="primary" plain @click="$router.push('/allNews')">
        点击进入新闻专区
      </el-button>
    </div>
  </div>
</template>
<style lang="less" scoped>
.real-time-info {
  width: 100%;
  background-color: #fff;
  height: 75vh;
  position: relative;
}
.real-time-center(@w) {
  position: absolute;
  width: @w;
  left: 50%;
  @now: -@w*0.5;
  margin-left: @now;
}
.real-time-main {
  .real-time-center(5rem);
  text-align: center;
  top: 10%;
  & h4 {
    border-bottom: 2px solid rgba(0, 0, 0, 0.1);
  }
}
.real-time-btn {
  .real-time-center(10rem);
  bottom: 10%;
  & a:hover {
    color: black;
  }
}
</style>
<script>
export default {
  name: "myRealTime",
  data() {
    return {};
  }
};
</script>
