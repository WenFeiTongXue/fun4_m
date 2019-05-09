<template>
  <div class="search">
    <!-- <mt-search
      v-model="value"
      cancel-text="取消"
      placeholder="搜索">
    </mt-search> -->
    <div class="searchContent">
      <input type="text" placeholder="搜索音乐或歌手" v-model="kw">
      <span class="icon" @click="search">
        <i class="icon-search"></i>
      </span>
    </div>
    <scroll v-if="total.length" :data="total" class="list" ref="list">
      <div class="song-list-wrapper">
        <div class="song-list">
          <ul>
            <li class="item" v-for="(s,i) of total" :key="i" @click="chose(total[i])">
              <div class="content">
                <h2 class="name">{{total[i].songs}}</h2>
                <p class="desc">{{total[i].singer}}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </scroll> 
  </div>
</template>
<script>
import { getSearchList } from "../../api/search.js";
import Scroll from "../../base/scroll/scroll"
import {mapMutations} from "vuex"
export default {
  data(){return {
    kw:"",
    list:[],
    total:[]
  }},
  methods:{
    ...mapMutations([
      "set_playing_state",
      "set_play_list",
      "set_current_index",
      "set_play_list_add"
    ]),
    chose(item){
      this.set_play_list_add(item)
      this.set_current_index(0)
      
    },
    search(){
      getSearchList(this.kw).then(res=>{
        console.log(res)
        this.total=[]
        var result=res.data.song.list
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
          this.total.push(a)
        })
        console.log(this.total)
      })
    }
  },
  components:{
    Scroll
  }
}
</script>

<style scoped>
.search{
  position: fixed;
  top:80px;
  right:0;
  left:0;
}
.search .searchContent{
  margin:0 auto;
  width:90%;
  display: flex;
  justify-content: space-around;
  background-color:#fff;
  border-radius: 14px;
  line-height: 28px;
  align-items: baseline;
}
.search .searchContent input{
  height:28px;
  border:none;
  outline: none;
}
.icon{
  height:28px;
  line-height: 28px;
  font-size:20px
}
 .list {
  position: fixed;
  top: 120px;
  bottom: 0;
  width: 100%;
  background: #333;
  overflow: hidden;
  padding:10px;
}
.song-list .item {
  display: flex;
  align-items: center;
  box-sizing: border-box;
  height: 64px;
  font-size: 14px;
  background: #333;
}
.song-list .item .rank {
  flex: 0 0 25px;
  width: 25px;
  margin-right: 30px;
  text-align: center;
}
.song-list .item .rank .icon {
  display: inline-block;
  width: 25px;
  height: 24px;
  background-size: 25px 24px;
}
.song-list .item .rank .text {
  color: rgb(255, 113, 213);
  font-size: 18px;
}
.song-list .item .content {
  flex: 1;
  line-height: 20px;
  overflow: hidden;
}
.song-list .item .content .name {
  color: #fff;
}
.song-list .item .content .desc {
  margin-top: 4px;
  color: rgba(255,255,255,0.3);
}
</style>