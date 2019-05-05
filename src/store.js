import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    playing:false,
    fullScreen:true,
    playList:[1],//播放列表
    sequenceList:[],//顺序列表
    mode:0,//播放模式,0顺序,1单曲,2随机
    currentIndex:-1//当前播放位置
  },
  getters:{
    playing:(state)=>{
      return state.playing
    },
    fullScreen:(state)=>{
      return state.fullScreen
    },
    playList:(state)=>{
      return state.playList
    },
    sequenceList:(state)=>{
      return state.sequenceList
    },
    mode:(state)=>{
      return state.mode
    },
    currentIndex:(state)=>{
      return state.currentIndex
    },
    currentSong:(state)=>{
      return state.playList[state.currentIndex]||{}
    }
  },
  mutations: {
    set_playing_state(state,flag){
      state.playing=flag
    },
    set_full_screen(state,flag){
      state.fullScreen=flag
    },
    set_play_list(state,list){
      state.playList=list 
    },
    set_sequence_list(state,list){
      state.sequenceList=list
    },
    set_play_mode(state,mode){
      state.mode=mode
    },
    set_current_index(state,index){
      state.currentIndex=index
    }
  },
  actions: {

  }
})
