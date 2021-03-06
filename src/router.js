import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Player from './views/player.vue'
import Recommend from "./components/recommend/recommend.vue"
import Singer from "./components/singer/singer.vue"
import SingerDetail from "./components/singer-detail/singer-detail.vue"
import Songs from "./components/songs/songs.vue"
import Rank from "./components/rank/rank.vue"
import RankDetail from "./components/rank-detail/rank-detail.vue"
import Search from "./components/search/search.vue"

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', component: Recommend },
    {path: '/recommend', component: Recommend },
    {path: '/singer', component: Singer ,children:[
      {path:":mid",component:SingerDetail}
    ]},
    // {path: '/singerdetail/:mid', component: SingerDetail,props:true },
    {path: '/songs/:mid', component: Songs ,props:true},
    {path: '/rank', component: Rank ,children:[
      {path:":mid",component:RankDetail}
    ]},
    {path: '/search', component: Search },
    {path: '/player', component: Player },
  ]
})
