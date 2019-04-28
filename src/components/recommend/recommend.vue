<template>
  <div>
    
    <h1>热门歌单推荐</h1>
  </div>
</template>
<script>
  import {getRecommend} from "../../api/recommend.js"
  import {ERR_OK} from "../../api/config.js"
export default {
  data(){return {}},
  methods:{
    _getRecommend(){
      getRecommend().then(res=>{
        if(res.code===ERR_OK){
          console.log(res.data.slider)
        }
      })
    }
  },
  created(){
    this._getRecommend();
  },
}
</script>
<style scoped>

</style>

