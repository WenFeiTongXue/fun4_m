<template>
  <div class="slider" ref="slider">
    <div class="slider-group" ref="sliderGroup">
      <slot>
      </slot>
    </div>
    <div class="dots">
      <span class="dot" v-for="(d,i) of dots" :key="i" :class="`${currentPageIndex===i?'active':''}`"></span>
    </div>
  </div>
</template>
<script>
import BScroll from "better-scroll"
import { addClass } from '../../common/js/dom.js';
export default {
  data(){
    return {
      dots:[],
      currentPageIndex:0
    }
  },
  props:{
    loop:{
      type:Boolean,
      default:true
    },
    autoplay:{
      type:Boolean,
      default:true
    },
    interval:{
      type:Number,
      default:4000
    }
  },
  methods:{
    //设置slider宽度 参数用以表示是否为resize
    _setSliderWidth(isResize){
      
      //获取sliderGroup子元素
      this.children=this.$refs.sliderGroup.children
      // 计算总宽度
      let width=0
      let sliderWidth=this.$refs.slider.clientWidth
      for(let i=0;i<this.children.length;i++){
        let child=this.children[i];
        // 加入新的class,设置样式
        addClass(child,"slider-item")
        child.style.width=sliderWidth+"px"
        width+=sliderWidth
      }
      if(this.loop&&! isResize){
        width+= 2 * sliderWidth
      }
      this.$refs.sliderGroup.style.width=width+"px"
    },
    //初始化slider
    _initSlider(){
      this.slider=new BScroll(this.$refs.slider, {
        scrollX: true,
        scrollY: false,
        momentum: false,
        snap: true,
        snapLoop: this.loop,
        snapThreshold: 0.3,
        snapSpeed: 400,
      }) 
      // 滑动结束后
      this.slider.on("scrollEnd",()=>{
        let pageIndex=this.slider.getCurrentPage().pageX
        if(this.loop){
          pageIndex-=1
        }
        this.currentPageIndex=pageIndex
        // 滑动结束后.调用_play函数
        if(this.autoplay){
          this._play()
        }
      })
      // 
      this.slider.on("beforeScrollStart",()=>{
        if(this.autoplay){
          // 清楚计时,保证每次滑动结束后都是从新开始
          clearTimeout(this.timer)
        }
      })
    },
    _play(){
      let pageIndex=this.currentPageIndex+1
      if(this.loop){
        pageIndex+=1
      }
      this.timer=setTimeout(()=>{
        //使用BScroll接口,自动跳转
        this.slider.goToPage(pageIndex,0,400)
      },this.interval)
    },
    _initDots(){
      this.dots=new Array(this.children.length)
    }
  },
  mounted(){
    //保证DOM成功渲染,进行初始化操作
    setTimeout(()=>{
      this._setSliderWidth()
      this._initDots()
      this._initSlider()

      // 如果自动播放为true，调用函数_play
      if(this.autoplay){
        this._play()
      }
    },20)
    // 监听视口变化
    window.addEventListener("resize",()=>{
      if(!this.slider){
        return
      }
      this._setSliderWidth(true)//添加参数后,不再额外增加2倍图片宽度
      this.slider.refresh()
    })
  },
  // activated() {
  //   if (this.autoplay) {
  //     this._play()
  //   }
  // },
  // deactivated() {
  //   clearTimeout(this.timer)
  // },
  // beforeDestroy() {
  //   clearTimeout(this.timer)
  // },
}
</script>
<style>
.slider{
  min-height:1px
}
.slider .slider-group{
  position: relative;
  overflow: hidden;
  white-space:nowrap;
}
.slider .slider-group .slider-item{
  float: left;
  box-sizing: border-box;
  overflow: hidden;
  text-align: center;
}
.slider .slider-group .slider-item a{
    display: block;
    width: 100%;
    overflow: hidden;
    text-decoration: none;
}
.slider .slider-group .slider-item img{
  display: block;
  width: 100%;
}
.dots{
  position: absolute;
  right: 0;
  left: 0;
  bottom: 12px;
  text-align: center;
  font-size: 0;
} 
.dots .dot{
  display: inline-block;
  margin: 0 4px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background:#fff;
}  
.dots .dot.active{
  width: 20px;
  border-radius: 5px
}   
</style>
