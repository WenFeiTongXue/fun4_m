<template>
  <div>歌单详情
  <!-- <song-list :songid="songid" :songs="songs" :times="times" :singer="singer" :mid="mid" :total="total">

  </song-list> -->
  </div>
  
</template>
<script>
import SongList from "../song-list/song-list"
import {getSongs} from "../../api/recommend.js"
export default {
  props:["mid"],
  data(){
    return {
      songid:[],
      songs:[],
      times:[],
      singer:[],
      total:[]
    }
  },
  components:{
    SongList
  },
  methods:{
    _getSongs(){
      getSongs(this.mid).then(res=>{
        let result=res
        this.total=res.cdlist[0].songlist
        console.log(this.total)
        // result.forEach((item,index)=>{
        //   this.songid.push(item.musicData.songmid)
        //   this.singer.push(item.musicData.singer[0].name)
        //   this.times.push(item.musicData.interval)
        //   this.songs.push(item.musicData.songname)
        // })
      })
    }
  },
  created(){
    this._getSongs()
  }
}
</script>
<style scoped>

</style>
