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
    <router-view class="detail"></router-view>
  </div>
</template>
<script>
import  Scroll  from "../../base/scroll/scroll";
import {getRankList} from "../../api/rank.js"
import { setTimeout } from 'timers';
export default {
  data(){return {
    rankList:[]
  }},
  mounted(){
    setTimeout(()=>{
      this._getRankList()
    },20)
    
  },
  methods:{
    toListDetail(id){
      this.$router.push("/rank/"+id)
    },
    _getRankList(){
      getRankList().then(res=>{
        this.rankList=res.data.topList
        console.log(this.rankList)
      })
    }
  },
  components:{
    Scroll
  }
}
</script>
<style scoped>
.ranklist{
  margin-top:30px;
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
.detail{
  position:fixed;
  top:0;
  bottom:0;
  left:0;
  right:0;
  background:#121212;
  transition:all 0.1;
}
</style>

