<template>
  <div class="song-content">
    <div class="song-title">
      <img :src="`https://y.gtimg.cn/music/photo_new/T001R300x300M000${id}.jpg?max_age=2592000`" alt="">
    </div>
  </div>
</template>
<script>
export default {
  props:["id"]
}
</script>
<style scoped>
.song-content{
  position: fixed;
  width: 100%;
  top: 88px;
  bottom: 0;
}
.song-title{
  position:relative;
  height:200px;
  overflow: hidden;
}
.song-title img{
  margin-top:-50px;
  width:100%;
  z-index: -1;
}
</style>
