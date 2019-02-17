<template>
  <div class="myFoot">
    <div ref="foot" class="container-fluid">
      <div ref="menu" class="row-fluid">
        <h4>MENU</h4>
        <ul class="nav nav-list">
          <li v-for="(item, index) in menu" :key="index">
            <router-link :to="item.url">{{item.name}}</router-link>
          </li>
        </ul>
      </div>
      <div class="row-fluid" ref="friendLink">
        <h4>友情链接</h4>
        <ul class="nav nav-list">
          <li>
            <a href="http://www.cdut.edu.cn/default.html">成都理工大学</a>
          </li>
          <li>
            <a href="http://www.jy.cdut.edu.cn/">成都理工大学就业指导中心</a>
          </li>

        </ul>
      </div>
      <div class="row-fluid" ref="contactUs">
        <h4>联系方式</h4>
        <ul class="nav nav-list">
          <li>
            <a href="#" class="no-hover">邮箱：cdutxxzxjsb@163.com</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style scoped>
.myFoot {
  position: relative;
  background-color: #363842;
}
li,
a {
  font-size: 0.8rem;
  color: #545766;
  text-decoration: none;
}
a:hover {
  color: white;
}
.no-hover :hover {
  cursor: default !important;
  color: #545766 !important;
}
h4 {
  font-size: 1rem;
  color: white;
}
</style>
<script>
export default {
  name: "myFoot",
  data() {
    return {
      menu: this.$store.state.navInfo
    };
  },
  computed: {
    screenWidth() {
      return this.$store.state.screenWidth;
    }
  },
  mounted() {
    this.reset();
  },
  methods: {
    reset() {
      if (this.screenWidth > 767) {
        this.$refs.foot.style = "height:350px;";
        this.$refs.menu.style = "position:absolute;left:20%;top:10%";
        this.$refs.friendLink.style = "position:absolute;left:40%;top:10%";
        this.$refs.contactUs.style = "position:absolute;left:60%;top:10%";
      } else {
        this.$refs.foot.style = "height:750px;";
      }
    }
  },
  watch: {
    screenWidth() {
      this.reset();
    }
  }
};
</script>
