<template>
  <div>
  <song-list v-show="total.length>0" :bgImg="bgImg" :mid="mid" :total="total" :backUrl="backUrl" :title="title">

  </song-list>
  </div>
  
</template>
<script>
import SongList from "../song-list/song-list"
import {getRankSongs} from "../../api/rank.js"
export default {
  props:["mid"],
  data(){
    return {
      backUrl:"/rank",
      total:[],
      bgImg:"",
      title:""
    }
  },
  components:{
    SongList
  },
  methods:{
    _getRankSongs(){
      getRankSongs(this.mid).then(res=>{
        console.log(res)
        let result=res.songlist
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
          a.songid=item.data.songmid
          a.singer=item.data.singer[0].name
          a.times=item.data.interval
          a.songs=item.data.songname
          a.albumImg="https://y.gtimg.cn/music/photo_new/T002R300x300M000"+item.data.albummid+".jpg?max_age=2592000"
          this.total.push(a);
        })
        this.bgImg="background-image:url("+res.topinfo.pic_v12+")"
        this.title=res.topinfo.ListName
        console.log(this.total)
      })
    }
  },
  created(){
    console.log(this.mid)
    this._getRankSongs()
  },
  activated(){
    // console.log(123)
    this._getRankSongs()
  },
  watch:{
    
  }
}
</script>
<style scoped>

</style>
