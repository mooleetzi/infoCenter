<template>
  <!-- 头部整体盒子 -->
  <div id="header" class="container-fuild">
    <div class="header-nav container hidden-xs" :class="{'header-nav-bottom':$store.state.navType==3}">
      <!-- 导航logo -->
      <div class="header-nav-logo">
        <h2 class="careerPc">
          <a href="/" style="transition:color 1s ease">知涯</a>
        </h2>
      </div>
      <!-- 导航内容 -->
      <ul class="header-nav-wrapper">
        <li class="myHead-nav-item-pc" v-for="(item, index) in navInfo " :key="index ">
          <router-link :to="item.url ">
            <h4 style="transition:color 1s ease" :class="{'white':$store.state.navType==1}">{{item.name}}</h4>
          </router-link>
        </li>
      </ul>
    </div>
    <!-- 手机导航 -->
    <div class="header-nav-m container-fuild visible-xs">
      <h2 class="career">
        <a href="#">知涯</a>
      </h2>
      <div class="header-nav-m-logo">
        <a href="#" @click="showNav=!showNav">
          <i class="fa fa-bars fa-lg" :class="{'changeAngel':showNav}" style="transition:transform .3s ease;margin-top:25px"></i>
        </a>
      </div>
      <!-- 导航栏 -->
      <div class="header-nav-m-menu">
        <collapseTransition>
          <div v-show="showNav">
            <div class="transition-box" v-for="(item, index) in navInfo" :key="index">
              <router-link :to="item.url">
                <h5>{{item.name}}</h5>
              </router-link>
              <!-- <hr style="color:black"> -->
            </div>
          </div>
        </collapseTransition>
      </div>
    </div>
  </div>
</template>
<script>
import collapseTransition from "./collapseTransition";
export default {
  name: "myHead",
  data() {
    return {
      navInfo: this.$store.state.navInfo,
      showNav: false
    };
  },
  components: {
    collapseTransition
  },
  computed: {
    screenWidth() {
      return this.$store.state.screenWidth;
    }
  }
};
</script>
<style lang="less" scoped>
@import url("element-ui/lib/theme-chalk/index.css");
@import "element-ui/lib/theme-chalk/base.css";

.header-nav {
  height: 8vh;
  overflow: hidden;
  width: 100%;
  &-bottem {
    border-bottom: solid 1px grey;
  }
}
.myHead-nav-item-pc {
  float: left;
  margin-top: -1.3rem;
  margin-right: 2rem;
  clear: none;
  list-style: none;
  a h4 {
    @media screen and (max-width: 910px) {
      font-size: 1rem;
      margin-top: 1.5rem;
    }
  }
  &:hover {
    text-decoration: underline;
  }
}

.careerPc {
  position: absolute;
  left: 20%;
  top: -2.2rem;
  @media screen and (max-width: 910px) {
    left: 15%;
  }
}

.header-nav-wrapper {
  margin-left: 35%;
  @media screen and (max-width: 910px) {
    margin-left: 25%;
  }
}
</style>

<style scoped>
.header-nav-m-logo {
  float: right;
  margin-right: 20px;
  height: 4rem;
}
.transition-box {
  padding: 0.1px 30px;
}

.changeAngel {
  transform: rotate(-90deg);
  transition: transform 0.3s ease;
}

.career {
  position: absolute;
  top: -25px;
  left: 5%;
}
</style>