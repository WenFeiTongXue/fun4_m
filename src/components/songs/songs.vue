<template>
  <div>
    <song-list v-show="total.length>0" :mid="mid" :total="total" :backUrl="backUrl" :bgImg="bgImg" :title="title"></song-list>
  </div>
  
</template>
<script>
import SongList from "../song-list/song-list"
import {getSongs} from "../../api/recommend.js"
export default {
  props:["mid"],
  data(){
    return {
      backUrl:"/",
      total:[],
      bgImg:"",
      title:"",
    }
  },
  components:{
    SongList
  },
  methods:{
    _getSongs(){
      getSongs(this.mid).then(res=>{
        let result=res.cdlist[0].songlist
        console.log(result)
        this.total=[]
        this.bgImg=""
        this.title=""
        result.forEach((item,index)=>{
          let a ={
            songid:"",
            songs:"",
            times:"",
            singer:"",
            albumImg:""
          }
          a.songid=item.songmid
          a.singer=item.singer[0].name
          a.times=item.interval
          a.songs=item.songname
          a.albumImg="https://y.gtimg.cn/music/photo_new/T002R300x300M000"+item.albummid+".jpg?max_age=2592000"
          this.total.push(a);
        })
        this.bgImg="background-image:url("+res.cdlist[0].logo+")"
        this.title=res.cdlist[0].dissname
        console.log(this.total)
      })
    }
  },
  created(){
    this._getSongs()
  },
  activated(){
    // console.log(123)
    this._getSongs()
  },
  components:{
    SongList
  }
}
</script>
<style scoped>

</style>
