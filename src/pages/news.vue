<template>
  <div style="width:100%">
    <mySlide :bannerImg="nowImg" :height="100"></mySlide>
    <my-news :next="nextId" :prev="prevId" :nowNew="nowNew"></my-news>
  </div>
</template>
<style lang="less" scoped>
</style>
<script>
import mySlide from "./../components/subCom/mySlide";
import myNews from "./../components/news/myNews";
export default {
  name: "news",
  components: {
    mySlide,
    myNews
  },
  created() {
    if (this.bannerImg) this.getImg();
  },
  data() {
    return {
      nowImg: [],
      nowIndex: -1,
      nowNew: {},
      nextId: -1,
      prevId: -1
    };
  },
  methods: {
    getImg() {
      let arr = Array.from(this.bannerImg);
      this.nowImg = arr.filter(x => x.id != this.nowId);
      arr.forEach((x, i) => {
        if (x.id == this.nowId) {
          this.nowIndex = i;
          this.nowNew = x;
        }
      });
      // alert(this.nowIndex);
      if (this.nowIndex == 0) this.prevId = -1;
      else this.prevId = arr[this.nowIndex - 1].id;
      if (this.nowIndex == arr.length - 1) this.nextId = -1;
      else this.nextId = arr[this.nowIndex + 1].id;
    }
  },
  computed: {
    bannerImg() {
      return this.$store.state.bannerImg;
    },
    nowId() {
      return this.$route.params.id;
    }
  },
  watch: {
    bannerImg() {
      this.getImg();
    },
    nowId() {
      this.getImg();
    }
  }
};
</script>
