<template>
  <div class="recommend">
    <scroll class="recommend-content" :data="discList" ref="scroll">
      <div>
        <div v-if="slider.length" class="slider-wrapper">
          <slider>
            <div v-for="(item,i) of slider" :key="i">
              <a :href="item.linkUrl">
                <img :src="item.picUrl" alt>
              </a>
            </div>
          </slider>
        </div>
        <div class="songlist">
          <h1 class="listTitle">热门歌单推荐</h1>
          <div class="listContent">
            <div class="listItem" v-for="(item,i) of discList" :key="i">
              <a href="javascript:;">
                <img v-lazy="item.imgurl" alt>
              </a>
              <div @click="toSongList(item.dissid)">
                <h5 v-text="item.creator.name"></h5>
                <p v-text="item.dissname"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </scroll>
  </div>
</template>
<script>
import Slider from "../../base/slider/slider.vue";
import Scroll from "../../base/scroll/scroll";
import { getRecommend, getDiscList } from "../../api/recommend.js";
import { ERR_OK } from "../../api/config.js";
export default {
  data() {
    return {
      slider: [],
      discList: [],
      bannerH: 0,
      bannerW: 0
    };
  },
  computed: {},
  methods: {
    toSongList(mid){
      this.$router.push("/songs/"+mid)
    },
    _getRecommend() {
      getRecommend().then(res => {
        if (res.code === ERR_OK) {
          this.slider = res.data.slider;
        }
      });
    },
    _getDiscList() {
      getDiscList().then(res => {
        this.discList = res.data.list;
      });
    }
  },
  created() {
    this._getRecommend();
    this._getDiscList();
  },
  activated(){
    this._getRecommend();
    this._getDiscList();
  },
  components: {
    Slider,
    Scroll
  }
};
</script>
<style scoped>
.recommend {
  position: fixed;
  width: 100%;
  top: 88px;
  bottom: 0;
}
.recommend .recommend-content{
  height:100%;
  overflow: hidden;
}
.slider-wrapper {
  width: 100%;
  position: relative;
  overflow: hidden;
}
.mint-swipe {
  margin-top: 1rem;
  height: 10rem;
}
/* .mint-swipe::after{
  display: block;
  content:"";
  clear: both;
} */
.mint-swipe img {
  width: 100%;
}
.listTitle {
  text-align: center;
  height: 65px;
  line-height: 65px;
}
.listContent .listItem {
  display: flex;
  box-sizing: border-box;
  align-items: center;
  padding: 0 20px 20px 20px;
  height: 100px;
}
.listContent .listItem div {
  margin-left: 10px;
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.listContent .listItem a,
.listContent .listItem img {
  width: 80px;
  height: 80px;
}
</style>

 