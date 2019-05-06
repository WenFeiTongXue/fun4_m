<template>
  <div>
  <song-list :songid="songid" :songs="songs" :times="times" :singer="singer" :mid="mid" :total="total">

  </song-list>
  </div>
  
</template>
<script>
import SongList from "../song-list/song-list"
import {getSingerSongs} from "../../api/singer.js"
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
    _getSingerSongs(){
      getSingerSongs(this.mid).then(res=>{
        let result=res.data.list
        this.total=res.data.list
        result.forEach((item,index)=>{
          this.songid.push(item.musicData.songmid)
          this.singer.push(item.musicData.singer[0].name)
          this.times.push(item.musicData.interval)
          this.songs.push(item.musicData.songname)
        })
      })
    }
  },
  created(){
    this._getSingerSongs()
    
  }
}
</script>
<style scoped>

</style>
