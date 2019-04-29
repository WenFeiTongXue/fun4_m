<template>
  <div id="app">
    <m-header></m-header>
    <tab></tab>
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>
<script>
import "../src/common/css/body.css"
import MHeader from "./components/m-header/m-header"
import Tab from "./components/tab/tab"
export default {
  components:{
    MHeader,
    Tab,
  }
}
</script>

<style>
body{
  background:#000;
  color:#0ff;
}
</style>
