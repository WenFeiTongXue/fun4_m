import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Player from './views/player.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', component: Home },
    {path: '/player', component: Player },
  ]
})
