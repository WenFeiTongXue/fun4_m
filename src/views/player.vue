<template>
  <div class="container">
    <div>
      <audio :src="playsong.url"></audio>
      <div id="lrc"></div>
      <ul id="playlist">
        <li v-for="(s,i) of playlist" :key="i"><a href="javascript:;" @click="addsong" :data-id="s.id">{{s.name}}</a></li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data(){return {
    playlist:[{
      name:''
    }],
    playsong:{}
  }},
  methods:{
    addsong(e){
      
    }
  },
  created(){
    this.axios
      .get(
        "https://api.itooi.cn/music/tencent/songList?key=579621905&id=1147906982"
      )
      .then(result => {
        this.playlist = result.data.data.songs;
        console.log(this.playlist)
      })
  }
}
</script>
<style scoped>

</style>
