<template>
  <div class="player" v-show="playList.length>0">
    <div class="normal-player" v-show="fullScreen">
      <div class="background">
        <img :src="currentSong.image" alt="" width="100%" height="100%">
      </div>
      <div class="top">
        <div class="back">
          <i class="icon-back" @click="close"></i>
        </div>
        <h1 class="title" v-html="currentSong.name"></h1>
        <h2 class="subtitle" v-html="currentSong.singer"></h2>
      </div>
      <div class="middle">
        <div class="middle-l">
          <div class="cd-wrapper">
            <div class="cd">
              <img :src="currentSong.image" alt="" class="image">
            </div>
          </div>
        </div>
      </div>
      <div class="bottom">
        <div class="operators">
          <div class="icon i-left">
            <i class="icon-random"></i>
          </div>
          <div class="icon i-left">
            <i class="icon-prev"></i>
          </div>
          <div class="icon i-center">
            <i class="icon-play"></i>
          </div>
          <div class="icon i-right">
            <i class="icon-next"></i>
          </div>
          <div class="icon i-right">
            <i class="icon icon-not-favorite"></i>
          </div>
        </div>
      </div>
    </div>
    <div class="mini-player" v-show="!fullScreen" @click="open">
      <div class="icon">
        <img src="" alt="" width="40%" height="40%">
      </div>
      <div class="text">
        <h2 class="name" v-html="currentSong.name"></h2>
        <p class="desc" v-html="currentSong.singer"></p>
      </div>
    </div>
  </div>
</template>
<script>
import {mapGetters} from "vuex"
import {mapMutations} from "vuex"
export default {
  computed:{
    ...mapGetters([
      'playing',
      'fullScreen',
      'playList',
      'sequenceList',
      'mode',
      'currentIndex',
      "currentSong"
    ])
  },
  methods:{
    ...mapMutations([
      "set_full_screen"
    ]),
    close(){
      this.set_full_screen(false)
    },
    open(){
      this.set_full_screen(true)
    }
  }
}
</script>
<style scoped>
.player .normal-player {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 150;
  background: #222;
}
.player .normal-player .background {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 0.6;
  filter: blur(20px);
}
.player .normal-player .top {
  position: relative;
  margin-bottom: 25px;
}
.player .normal-player .top .back {
  position: absolute;
  top: 0;
  left: 6px;
  z-index: 50;
}
.player .normal-player .top .back .icon-back {
  display: block;
  padding: 9px;
  font-size: 22px;
  color: rgb(255, 113, 213);
  transform: rotate(-90deg);
}
.player .normal-player .top .title {
  width: 70%;
  margin: 0 auto;
  line-height: 40px;
  text-align: center;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  font-size: 18px;
  color: #fff;
}
.player .normal-player .top .subtitle {
  line-height: 20px;
  text-align: center;
  font-size: 14px;
  color: #fff;
}
.player .normal-player .middle {
  position: fixed;
  width: 100%;
  top: 80px;
  bottom: 170px;
  white-space: nowrap;
  font-size: 0;
}
.player .normal-player .middle .middle-l {
  display: inline-block;
  vertical-align: top;
  position: relative;
  width: 100%;
  height: 0;
  padding-top: 80%;
}
.player .normal-player .middle .middle-l .cd-wrapper {
  position: absolute;
  left: 10%;
  top: 0;
  width: 80%;
  height: 100%;
}
.player .normal-player .middle .middle-l .cd-wrapper .cd {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border: 10px solid rgba(255,255,255,0.1);
  border-radius: 50%;
}
.player .normal-player .middle .middle-l .cd-wrapper .cd.play {
  animation: rotate 20s linear infinite;
}
.player .normal-player .middle .middle-l .cd-wrapper .cd.pause {
  animation-play-state: paused;
}
.player .normal-player .middle .middle-l .cd-wrapper .cd .image {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.player .normal-player .middle .middle-l .playing-lyric-wrapper {
  width: 80%;
  margin: 30px auto 0 auto;
  overflow: hidden;
  text-align: center;
}
.player .normal-player .middle .middle-l .playing-lyric-wrapper .playing-lyric {
  height: 20px;
  line-height: 20px;
  font-size: 14px;
  color: rgba(255,255,255,0.5);
}
.player .normal-player .middle .middle-r {
  display: inline-block;
  vertical-align: top;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.player .normal-player .middle .middle-r .lyric-wrapper {
  width: 80%;
  margin: 0 auto;
  overflow: hidden;
  text-align: center;
}
.player .normal-player .middle .middle-r .lyric-wrapper .text {
  line-height: 32px;
  color: rgba(255,255,255,0.5);
  font-size: 14px;
}
.player .normal-player .middle .middle-r .lyric-wrapper .text.current {
  color: #fff;
}
.player .normal-player .bottom {
  position: absolute;
  bottom: 50px;
  width: 100%;
}
.player .normal-player .bottom .dot-wrapper {
  text-align: center;
  font-size: 0;
}
.player .normal-player .bottom .dot-wrapper .dot {
  display: inline-block;
  vertical-align: middle;
  margin: 0 4px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(255,255,255,0.5);
}
.player .normal-player .bottom .dot-wrapper .dot.active {
  width: 20px;
  border-radius: 5px;
  background: rgba(255,255,255,0.8);
}
.player .normal-player .bottom .progress-wrapper {
  display: flex;
  align-items: center;
  width: 80%;
  margin: 0px auto;
  padding: 10px 0;
}
.player .normal-player .bottom .progress-wrapper .time {
  color: #fff;
  font-size: 12px;
  flex: 0 0 30px;
  line-height: 30px;
  width: 30px;
}
.player .normal-player .bottom .progress-wrapper .time.time-l {
  text-align: left;
}
.player .normal-player .bottom .progress-wrapper .time.time-r {
  text-align: right;
}
.player .normal-player .bottom .progress-wrapper .progress-bar-wrapper {
  flex: 1;
}
.player .normal-player .bottom .operators {
  display: flex;
  align-items: center;
}
.player .normal-player .bottom .operators .icon {
  flex: 1;
  color: rgb(255, 113, 213);
}
.player .normal-player .bottom .operators .icon.disable {
  color: rgba(255,205,49,0.5);
}
.player .normal-player .bottom .operators .icon i {
  font-size: 30px;
}
.player .normal-player .bottom .operators .i-left {
  text-align: right;
}
.player .normal-player .bottom .operators .i-center {
  padding: 0 20px;
  text-align: center;
}
.player .normal-player .bottom .operators .i-center i {
  font-size: 40px;
}
.player .normal-player .bottom .operators .i-right {
  text-align: left;
}
.player .normal-player .bottom .operators .icon-favorite {
  color: #d93f30;
}
.player .normal-player.normal-enter-active,
.player .normal-player.normal-leave-active {
  transition: all 0.4s;
}
.player .normal-player.normal-enter-active .top,
.player .normal-player.normal-leave-active .top,
.player .normal-player.normal-enter-active .bottom,
.player .normal-player.normal-leave-active .bottom {
  transition: all 0.4s cubic-bezier(0.86, 0.18, 0.82, 1.32);
}
.player .normal-player.normal-enter,
.player .normal-player.normal-leave-to {
  opacity: 0;
}
.player .normal-player.normal-enter .top,
.player .normal-player.normal-leave-to .top {
  transform: translate3d(0, -100px, 0);
}
.player .normal-player.normal-enter .bottom,
.player .normal-player.normal-leave-to .bottom {
  transform: translate3d(0, 100px, 0);
}
.player .mini-player {
  display: flex;
  align-items: center;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 180;
  width: 100%;
  height: 60px;
  background: #333;
}
.player .mini-player.mini-enter-active,
.player .mini-player.mini-leave-active {
  transition: all 0.4s;
}
.player .mini-player.mini-enter,
.player .mini-player.mini-leave-to {
  opacity: 0;
}
.player .mini-player .icon {
  flex: 0 0 40px;
  width: 40px;
  padding: 0 10px 0 20px;
}
.player .mini-player .icon img {
  border-radius: 50%;
}
.player .mini-player .icon img.play {
  animation: rotate 10s linear infinite;
}
.player .mini-player .icon img.pause {
  animation-play-state: paused;
}
.player .mini-player .text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  line-height: 20px;
  overflow: hidden;
}
.player .mini-player .text .name {
  margin-bottom: 2px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  font-size: 14px;
  color: #fff;
}
.player .mini-player .text .desc {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  font-size: 12px;
  color: rgba(255,255,255,0.3);
}
.player .mini-player .control {
  flex: 0 0 30px;
  width: 30px;
  padding: 0 10px;
}
.player .mini-player .control .icon-play-mini,
.player .mini-player .control .icon-pause-mini,
.player .mini-player .control .icon-playlist {
  font-size: 30px;
  color: rgba(255,205,49,0.5);
}
.player .mini-player .control .icon-mini {
  font-size: 32px;
  position: absolute;
  left: 0;
  top: 0;
}
@-moz-keyframes rotate {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
@-webkit-keyframes rotate {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
@-o-keyframes rotate {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes rotate {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}

</style>
