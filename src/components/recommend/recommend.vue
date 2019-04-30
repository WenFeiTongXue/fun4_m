<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(s,i) of slider" :key="i" >
        <a href="javascript">
          <img :src="s.picUrl" alt="" ref="imgs">
        </a>
      </mt-swipe-item>
    </mt-swipe>
    <h1 class="listTitle">热门歌单推荐</h1>
    <div class="listContent">
      <div class="listItem" v-for="(item,i) of discList" :key="i">
        <a href="javascript:;"><img :src="item.imgurl" alt=""></a>
        <div>
          <h5 v-text="item.creator.name"></h5>
          <p v-text="item.dissname"></p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {getRecommend,getDiscList} from "../../api/recommend.js"
  import {ERR_OK} from "../../api/config.js"
export default {
  data(){return {
    slider:[],
    discList:[]
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
        console.log(res.data)
        this.discList=res.data.list
      })
    }
  },
  created(){
    this._getRecommend();
    this._getDiscList();
  },
  mounted(){
    // console.log(this.$refs.mints)
    // console.log(this.$refs.imgs)
  }
}
</script>
<style scoped>
.mint-swipe{
  margin-top:1rem;
  height:10rem;
}
.mint-swipe::after{
  display: block;
  content:"";
  clear: both;
}
.mint-swipe img{
  width:100%;
}
.listTitle{
  text-align: center;
  height: 65px;
  line-height: 65px
}
.listContent .listItem{
  display: flex;
  box-sizing: border-box;
  align-items: center;
  padding: 0 20px 20px 20px;
  height:100px;
}
.listContent .listItem div{
  margin-left:10px;
  height:80px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.listContent .listItem a,.listContent .listItem img{
  width:80px;
  height:80px
} 
</style>

 