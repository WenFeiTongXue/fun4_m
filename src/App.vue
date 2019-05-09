<template>
  <div id="app">
    <m-header></m-header>
    <tab></tab>
    <keep-alive>
      <router-view/>
    </keep-alive>
    <player></player>
  </div>
</template>
<script>
import "../src/common/fonts/music-icon.css"
import "../src/common/css/body.css"
import MHeader from "./components/m-header/m-header"
import Player from "./components/player/player"
import Tab from "./components/tab/tab"
export default {
  components:{
    MHeader,
    Tab,
    Player
  }
}
</script>

<style>
.mt-range .mt-range-content{
  margin-right:20px;
}
.mt-range .mt-range-progress{
  background-color:rgb(255, 113, 213)
}
.mt-range .mt-range-thumb{
  width:20px;
  height:20px;
  top:-9px;
}
.mt-range .mt-range-runway{
  right:0
}
</style>
