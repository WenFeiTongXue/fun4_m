<template>
  <div class="music-list">
    <div class="back">
      <i class="icon-back" @click="back"></i>
    </div>
    <h1 class="title">{{title}}</h1>
    <div class="bg-image" :style="bgImg" ref="bgImage">
      <div class="play-wrapper">
        <div ref="playBtn" v-show="total.length>0" class="play" @click="random">
          <i class="icon-play"></i>
          <span class="text">随机播放全部</span>
        </div>
      </div>
      <div class="filter" ref="filter"></div>
    </div>
    <div class="bg-layer" ref="layer">
      <scroll :data="total" class="list" ref="list">
        <div class="song-list-wrapper">
          <div class="song-list">
            <ul>
              <li class="item" v-for="(s,i) of total" :key="i" @click="chose(total[i])">
                <div class="rank">
                  <span :class="getRankCls(i)"></span>
                </div>
                <div class="content">
                  <h2 class="name">{{total[i].songs}}</h2>
                  <p class="desc">{{total[i].singer}}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </scroll> 
    </div>
  </div>

</template>
<script>
import Scroll from "../../base/scroll/scroll"
import {mapMutations} from "vuex"
import {mapGetters} from "vuex"
export default {
  props:["mid","total","backUrl","bgImg","title"],
  data(){
    return {
      
    }
  },
  computed:{
    // bgStyle() {
    //   return 
    // },
    ...mapGetters([
      "playList",
      "currentIndex",
      "currentSong"
    ])
  },
  watch:{
    playList(){
      console.log(this.playList)
    }
  },
  methods:{
    ...mapMutations([
      "set_playing_state",
      "set_play_list",
      "set_current_index",
      "set_play_list_add"
    ]),
    back(){
      // console.log(this.$route)
      this.$router.push(this.backUrl)
    },
    chose(item){
      this.set_play_list_add(item)
      this.set_current_index(0)
    },
    random(){
      // this.set_play_list(this.songid)
      // console.log(~~(Math.random()*this.songid.length))
      // this.set_current_index(~~(Math.random()*this.songid.length))
      // console.log(this.currentSong)
      // this.set_playing_state(true)
      this.set_play_list(this.total)
      this.set_current_index(~~(Math.random()*this.total.length))
      this.set_playing_state(true)
    },
    listenScroll(){

    },
    getRankCls(index) {
      if (index <= 2) {
        return `icon icon${index}`
      } else {
        return 'text'
      }
    },
  },
  created(){
  },
  components:{
    Scroll
  }
}
</script>
<style scoped>
.music-list {
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: #222;
}
.music-list .back {
  position: absolute;
  top: 0;
  left: 6px;
  z-index: 50;
}
.music-list .back .icon-back {
  display: block;
  padding: 10px;
  font-size: 22px;
  color:rgb(255, 113, 213);
}
.music-list .title {
  position: absolute;
  top: 0;
  left: 10%;
  z-index: 40;
  width: 80%;
  text-align: center;
  line-height: 40px;
  font-size: 18px;
  color: #fff;
  background-color: transparent;
}
.music-list .bg-image {
  position: relative;
  width: 100%;
  height: 0;
  padding-top: 70%;
  transform-origin: top;
  background-size: cover;
}
.music-list .bg-image .play-wrapper {
  position: absolute;
  bottom: 20px;
  z-index: 50;
  width: 100%;
}
.music-list .bg-image .play-wrapper .play {
  box-sizing: border-box;
  width: 135px;
  padding: 7px 0;
  margin: 0 auto;
  text-align: center;
  border: 1px solid rgb(255, 113, 213);
  color: rgb(255, 113, 213);
  border-radius: 100px;
  font-size: 0;
}
.music-list .bg-image .play-wrapper .play .icon-play {
  display: inline-block;
  vertical-align: middle;
  margin-right: 6px;
  font-size: 16px;
}
.music-list .bg-image .play-wrapper .play .text {
  display: inline-block;
  vertical-align: middle;
  font-size: 12px;
}
.music-list .bg-image .filter {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(7,17,27,0.4);
}
.music-list .bg-layer {
  position: relative;
  height: 100%;
  /* background: #222; */
}
.music-list .list {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  /* background: #222; */
  overflow: hidden;
}
/* .music-list .list .song-list-wrapper {
  position:absolute;
  top:0;
  padding: 20px 30px;padding:0;
  padding-top:30%
} */
.music-list .list .loading-container {
  position: absolute;
  width: 100%;
  top: 50%;
  transform: translateY(-50%);
}
.song-list .item {
  display: flex;
  align-items: center;
  box-sizing: border-box;
  height: 64px;
  font-size: 14px;
  background: #333;
}
.song-list .item .rank {
  flex: 0 0 25px;
  width: 25px;
  margin-right: 30px;
  text-align: center;
}
.song-list .item .rank .icon {
  display: inline-block;
  width: 25px;
  height: 24px;
  background-size: 25px 24px;
}
.song-list .item .rank .text {
  color: rgb(255, 113, 213);
  font-size: 18px;
}
.song-list .item .content {
  flex: 1;
  line-height: 20px;
  overflow: hidden;
}
.song-list .item .content .name {
  color: #fff;
}
.song-list .item .content .desc {
  margin-top: 4px;
  color: rgba(255,255,255,0.3);
}
</style>
