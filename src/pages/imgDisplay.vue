<template>
  <div class="img-container">
    <mySlide :bannerImg="img" :imgType="2" :height="$store.state.screenWidth>767?82:62"></mySlide>
    <div class="img-nav">
      <el-tabs v-model="activeName" :stretch="true" tab-position="top">
        <el-tab-pane label="全部图片" name="全部图片">
          <div class="img-pc hidden-xs" v-if="screenWidth>768">
            <waterfall :line-gap="200" :watch="all">
              <waterfall-slot
                v-for="(item, index) in all"
                :width="item.width"
                :height="item.height"
                :order="index"
                :key="item.img_url+index"
              >
              <div class="img animated zoomIn">
                <img v-lazy="item.img_url" preview="1" :preview-text="item.img_auth"></img>
                <div class="img-bg">
                  <i class="icon icon-search" style="margin-top:1rem"></i>
                  <p class="centertxt">{{item.img_name}}</p>
                </div>
            </div>
              </waterfall-slot>
            </waterfall>
          </div>
          <div class="img-pe visible-xs" v-else>
            <div class="img-item animated zoomIn" v-for="(item, index) in all" :key="index">
              <img v-lazy="item.img_url" alt="" preview="1" :preview-text="item.img_auth">
            </div>
          </div>
          <div class="img-none centertxt animated lightSpeedIn" v-if="all.length==0">
            <span class="myFont">这里，空空的</span>
          </div>
          <div v-if="all.length" class="img-btn">
            <el-button class="img-btn-left">
              <i class="fa fa-chevron-left"></i>
              <span>暂无</span>
            </el-button>
            <el-button class="img-btn-right">
              <span>暂无</span>
              <i class="fa fa-chevron-right"></i>
            </el-button>
          </div>
        </el-tab-pane>
        <el-tab-pane label="LOGO" name="LOGO" :lazy="true">
          <div class="img-pc hidden-xs" v-if="screenWidth>768">
            <waterfall :line-gap="200" :watch="logo">
              <waterfall-slot
                v-for="(item, index) in logo"
                :width="item.width"
                :height="item.height"
                :order="index"
                :key="item.img_url+index"
              >
              <div class="img animated zoomIn">
                <img v-lazy="item.img_url" preview="2" :preview-text="item.img_auth"></img>
                <div class="img-bg">
                  <i class="icon icon-search" style="margin-top:1rem"></i>
                  <p class="centertxt">{{item.img_name}}</p>
                </div>
            </div>
              </waterfall-slot>
            </waterfall>
          </div>
          <div class="img-pe visible-xs" v-else>
            <div class="img-item animated zoomIn" v-for="(item, index) in logo" :key="index">
              <img v-lazy="item.img_url" alt="" preview="2" :preview-text="item.img_auth">
            </div>
          </div>
          <div class="img-none centertxt animated lightSpeedIn" v-if="logo.length==0">
            <span class="myFont">这里，空空的</span>
          </div>
          <div v-if="logo.length" class="img-btn">
            <el-button class="img-btn-left">
              <i class="fa fa-chevron-left"></i>
              <span>暂无</span>
            </el-button>
            <el-button class="img-btn-right">
              <span>暂无</span>
              <i class="fa fa-chevron-right"></i>
            </el-button>
          </div>
        </el-tab-pane>
        <el-tab-pane label="办公室美华" name="办公室美华" :lazy="true">
          <div class="img-pc hidden-xs" v-if="screenWidth>768">
            <waterfall :line-gap="200" :watch="officeDec">
              <waterfall-slot
                v-for="(item, index) in officeDec"
                :width="item.width"
                :height="item.height"
                :order="index"
                :key="item.img_url+index"
              >
              <div class="img animated zoomIn">
                <img v-lazy="item.img_url" preview="3" :preview-text="item.img_auth"></img>
                <div class="img-bg">
                  <i class="icon icon-search" style="margin-top:1rem"></i>
                  <p class="centertxt">{{item.img_name}}</p>
                </div>
            </div>
              </waterfall-slot>
            </waterfall>
          </div>
          <div class="img-pe visible-xs">
            <div class="img-item animated zoomIn" v-for="(item, index) in officeDec" :key="index">
              <img v-lazy="item.img_url" alt="" preview="3" :preview-text="item.img_auth">
            </div>
          </div>
          <div class="img-none centertxt animated lightSpeedIn" v-if="officeDec.length==0">
            <span class="myFont">这里，空空的</span>
          </div>
          <div v-if="officeDec.length" class="img-btn">
            <el-button class="img-btn-left">
              <i class="fa fa-chevron-left"></i>
              <span>暂无</span>
            </el-button>
            <el-button class="img-btn-right">
              <span>暂无</span>
              <i class="fa fa-chevron-right"></i>
            </el-button>
          </div>
        </el-tab-pane>
        <el-tab-pane label="宣传类" name="宣传类" :lazy="true">
          <div class="img-pc hidden-xs" v-if="screenWidth>768">
            <waterfall :line-gap="200" :watch="propagate">
              <waterfall-slot
                v-for="(item, index) in propagate"
                :width="item.width"
                :height="item.height"
                :order="index"
                :key="item.img_url+index"
              >
              <div class="img animated zoomIn">
                <img v-lazy="item.img_url" preview="4" :preview-text="item.img_auth"></img>
                <div class="img-bg">
                  <i class="icon icon-search" style="margin-top:1rem"></i>
                  <p class="centertxt">{{item.img_name}}</p>
                </div>
            </div>
              </waterfall-slot>
            </waterfall>
          </div>
          <div class="img-pe visible-xs" v-else>
            <div class="img-item animated zoomIn" v-for="(item, index) in propagate" :key="index">
              <img v-lazy="item.img_url" alt="" preview="4" :preview-text="item.img_auth">
            </div>
          </div>
          <div class="img-none centertxt animated lightSpeedIn" v-if="propagate.length==0">
            <span class="myFont">这里，空空的</span>
          </div>
          <div v-if="propagate.length" class="img-btn">
            <el-button class="img-btn-left">
              <i class="fa fa-chevron-left"></i>
              <span>暂无</span>
            </el-button>
            <el-button class="img-btn-right">
              <span>暂无</span>
              <i class="fa fa-chevron-right"></i>
            </el-button>
          </div>
        </el-tab-pane>
        <el-tab-pane label="展示类" name="展示类" :lazy="true">
          <div class="img-pc hidden-xs" v-if="screenWidth>768">
            <waterfall :line-gap="200" :watch="display">
              <waterfall-slot
                v-for="(item, index) in display"
                :width="item.width"
                :height="item.height"
                :order="index"
                :key="item.img_url+index"
              >
              <div class="img animated zoomIn">
                <img v-lazy="item.img_url" preview="5" :preview-text="item.img_auth"></img>
                <div class="img-bg">
                  <i class="icon icon-search" style="margin-top:1rem"></i>
                  <p class="centertxt">{{item.img_name}}</p>
                </div>
            </div>
              </waterfall-slot>
            </waterfall>
          </div>
          <div class="img-pe visible-xs" v-else>
            <div class="img-item animated zoomIn" v-for="(item, index) in display" :key="index">
              <img v-lazy="item.img_url" alt="" preview="5" :preview-text="item.img_auth">
            </div>
          </div>
          <div class="img-none centertxt animated lightSpeedIn" v-if="display.length==0">
            <span class="myFont">这里，空空的</span>
          </div>
          <div v-if="display.length" class="img-btn">
            <el-button class="img-btn-left">
              <i class="fa fa-chevron-left"></i>
              <span>暂无</span>
            </el-button>
            <el-button class="img-btn-right">
              <span>暂无</span>
              <i class="fa fa-chevron-right"></i>
            </el-button>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<style lang="less" scoped src="./../assets/less/imgDisplay.less">
</style>
<script>
import mySlide from "./../components/subCom/mySlide.vue";
import Waterfall from 'vue-waterfall/lib/waterfall'
import WaterfallSlot from 'vue-waterfall/lib/waterfall-slot'
export default {
  //图片懒加载
  name: "imgDisplay",
  data() {
    return {
      activeName: "全部图片",
      img: [
        {
          passage_img: require("./../assets/career/img/dmImg/dmbg1.jpg"),
          first: "Art Designing Department",
          second: "创意与美的结合，成就一场灵感的自由释放"
        },
        {
          passage_img: require("./../assets/career/img/dmImg/dmbg2.jpg"),
          first: "Art Designing Department",
          second: "创意与美的结合，成就一场灵感的自由释放"
        },
        {
          passage_img: require("./../assets/career/img/dmImg/dmbg3.jpg"),
          first: "Art Designing Department",
          second: "创意与美的结合，成就一场灵感的自由释放"
        },
        {
          passage_img: require("./../assets/career/img/dmImg/dmbg4.jpg"),
          first: "Art Designing Department",
          second: "创意与美的结合，成就一场灵感的自由释放"
        }
      ],
      all: [],
      logo: [],
      officeDec: [],
      propagate: [],
      display: [],
    };
  },
  created() {
    if (!this.images) {
      this.$store.dispatch("getData", {
        url: "/allImages",
        mutation: "setImages",
        callback: this.getImg
      });
    } else {
      this.getImg();
    }
  },
  mounted() {
  },
  methods: {
    async getImg() {
      await this.images.forEach((x, i) => {
        let nowImg=new Image();
        nowImg.src=x.img_url;
        x.width=nowImg.width;
        x.height=nowImg.height;
        this.all.push(x);
        if (x.img_type == "LOGO") this.logo.push(x);
        else if (x.img_type == "办公室美华") {
          this.officeDec.push(x);
        } else if (x.img_type == "宣传类") {
          this.propagate.push(x);
        } else {
          this.display.push(x);
        }
      });
      this.$previewRefresh(); //图片异步加载需要执行此函数才能正常使用预览！！！
    },
  },
  components: {
    mySlide,
    Waterfall,
    WaterfallSlot
  },
  computed: {
    images() {
      return this.$store.state.images;
    },
    screenWidth() {
      return this.$store.state.screenWidth;
    },
  }
};
</script>
