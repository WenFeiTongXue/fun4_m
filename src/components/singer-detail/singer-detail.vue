<template>
  <div>
  <song-list v-show="total.length>0" :bgImg="bgImg" :mid="mid" :total="total" :backUrl="backUrl" :title="title">

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
      backUrl:"/singer",
      total:[],
      bgImg:"",
      title:""
    }
  },
  components:{
    SongList
  },
  methods:{
    _getSingerSongs(){
      getSingerSongs(this.mid).then(res=>{
        console.log(res)
        let result=res.data.list
        this.total=[]
        this.title=""
        this.bgImg=""
        result.forEach((item,index)=>{
          let a ={
            songid:"",
            songs:"",
            times:"",
            singer:"",
            albumImg:""
          }
          a.songid=item.musicData.songmid
          a.singer=item.musicData.singer[0].name
          a.times=item.musicData.interval
          a.songs=item.musicData.songname
          a.albumImg="https://y.gtimg.cn/music/photo_new/T002R300x300M000"+item.musicData.albummid+".jpg?max_age=2592000"
          this.total.push(a);
        })
        this.bgImg="background-image:url(https://y.gtimg.cn/music/photo_new/T001R300x300M000"+this.mid+".jpg?max_age=2592000)"
        this.title=res.data.singer_name
        console.log(this.total)
      })
    }
  },
  created(){
    this._getSingerSongs()
  },
  activated(){
    // console.log(123)
    this._getSingerSongs()
  },
  watch:{
    
  }
}
</script>
<style scoped>

</style>
