<template>
  <div class="ranklist">
   <scroll class="listContent" v-show="rankList.length" :data="rankList" ref="scroll">
      <div>
        <div class="listItem" v-for="(item,i) of rankList" :key="i" @click="toListDetail(item.id)">
          <a href="javascript:;">
            <img v-lazy="item.picUrl" alt>
          </a>
          <div>
            <h5 v-text="item.topTitle"></h5>
          </div>
        </div>
      </div>
    </scroll>
    <transition name="slide-fade">
      <router-view v-if="show" class=rankdetail :mid="mid"></router-view>
    </transition>
  </div>
</template>
<script>
import  Scroll  from "../../base/scroll/scroll";
import {getRankList} from "../../api/rank.js"
import { setTimeout } from 'timers';
export default {
  data(){return {
    rankList:[],
    show:false,
    mid:0
  }},
  mounted(){
    setTimeout(()=>{
      this._getRankList()
    },20)
    
  },
  methods:{
    toListDetail(id){
      this.$router.push("/rank/"+id)
      this.show=true
    },
    _getRankList(){
      getRankList().then(res=>{
        this.rankList=res.data.topList
        console.log(this.rankList)
      })
    }
  },
  watch:{
    $route(){
      this.mid=this.$route.params.mid
    }
  },
  components:{
    Scroll
  }
}
</script>
<style scoped>
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
/* .detail-enter-active,.detail-leave-active{
  transition: opacity .5s;
}
.detail-enter,.detail-leave-to{
  opacity:0
} */
.ranklist{
  position: fixed;
  width: 100%;
  top: 88px;
  bottom: 0;
}
.listContent{
  height:100%;
  overflow: hidden;
}
.listTitle {
  text-align: center;
  height: 65px;
  line-height: 65px;
}
.listContent .listItem {
  display: flex;
  box-sizing: border-box;
  align-items: center;
  padding: 0 20px 20px 20px;
  height: 100px;
}
.listContent .listItem div {
  margin-left: 10px;
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.listContent .listItem a,
.listContent .listItem img {
  width: 80px;
  height: 80px;
}
.rankdetail{
  position:fixed;
  top:0;
  bottom:0;
  left:0;
  right:0;
  background:#121212;
  transition:all 0.1;
}
</style>

