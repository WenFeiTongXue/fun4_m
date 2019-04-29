<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(s,i) of slider" :key="i">
        <a href="javascript">
          <img :src="s.picUrl" alt="">
        </a>
      </mt-swipe-item>
    </mt-swipe>
    <h1>热门歌单推荐</h1>
  </div>
</template>
<script>
  import {getRecommend,getDiscList} from "../../api/recommend.js"
  import {ERR_OK} from "../../api/config.js"
export default {
  data(){return {
    slider:[]
  }},
  methods:{
    _getRecommend(){
      getRecommend().then(res=>{
        if(res.code===ERR_OK){
          console.log(res.data.slider)
          this.slider=res.data.slider
        }
      })
    },
    _getDiscList(){
      getDiscList().then(res=>{
        if(res.code===ERR_OK){
          console.log(res.data)
          // this.slider=res.data.slider
        }
      })
    }
  },
  created(){
    this._getRecommend();
    this._getDiscList();
  },
}
</script>
<style scoped>
.mint-swipe{
  margin-top:1rem;
  height:10rem;
}
.mint-swipe img{
  width:100%;
}
</style>

