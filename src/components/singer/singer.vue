<template>
  <div class="singer">
    <scroll v-if="singerList" class="singer-content" :data="singerList" ref="scroll">
      <div>
      <div v-for="(t,i) of singerList" :key="i">
        <p class="stitle">{{t.title}}</p>
        <ul>
          <li v-for="(n,j) of singerList[i].items" :key="j" class="sname" @click="toSingerDetail(n.Fsinger_mid)">
            <img v-lazy="`https://y.gtimg.cn/music/photo_new/T001R150x150M000${n.Fsinger_mid}.jpg?max_age=2592000`" alt="">
            <p>{{n.Fsinger_name}}</p>
          </li>
        </ul>
      </div>
        <!-- <mt-index-list>
          <mt-index-section :index="t.title" v-for="(t,i) of singerList" :key="i">
            <mt-cell :title="n.Fsinger_name" v-for="(n,j) of singerList[i].items" :key="j"></mt-cell>
          </mt-index-section>
        </mt-index-list> -->
      </div>
    </scroll>
    <transition name="detail">
      <router-view v-if="show" :mid="mid"></router-view>
    </transition>
  </div>
</template>
<script>
import {getSingerList} from "../../api/singer.js"
import Scroll from "../../base/scroll/scroll";
export default {
  data(){return {
    singerList:[],
    mid:"",
    show:false
  }},
  methods:{
    toSingerDetail(id){
      this.$router.push("/singer/"+id)
      this.show=true
    },
    _getSingerList(){
      getSingerList().then(res=>{
        let list=res.data.list
        console.log(list)
        // 规范歌手信息
        var map={
          hot:{
            title:"热门",
            items:[]
          }
        }
        list.forEach((item,index)=>{
          if(index<10){
            map.hot.items.push(item)
          }
          let key=item.Findex
          if(!map[key]){
            map[key]={
              title:key,
              items:[]
            }
          }
          map[key].items.push(item)
        })
        console.log(map)
        // 将map对象变为按顺序排列的数组
        let hot=[];
        let oth=[];
        for(let key in map){
          let reg=/[a-zA-z]/
          if(reg.test(map[key].title)){
            oth.push(map[key])
          }else if(map[key].title=="热门"){
            hot.push(map[key])
          }
        }
        // 使用sort方法排序
        oth.sort((a,b)=>{
          return a.title.charCodeAt(0)-b.title.charCodeAt(0);
        })
        this.singerList=hot.concat(oth)
      })
    }
  },
  created(){
    this._getSingerList()
  },
  components:{
    Scroll
  },
  watch:{
    $route(){
      this.mid=this.$route.params.mid
    }
  },
}
</script>
<style scoped>
.singer{
  position: fixed;
  width: 100%;
  top: 88px;
  bottom: 0;
}
.singer-content{
  height:100%;
  overflow: hidden;
}
.stitle{
  font-weight: bold;
  background:#222;
  padding:0 5px;
  font-size:16px;
}
.sname{
  display: flex;
  align-items: center;
  padding:10px;
  border:1px solid #222;
}
.sname img{
  width:60px;
  border-radius: 50%;
}
.detail-enter-active,.detail-leave-active{
  transition: all .5s;
}
.detail-enter,.detail-leave-to{
  opacity: 0;
}

</style>

