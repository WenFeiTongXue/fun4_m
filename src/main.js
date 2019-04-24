import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Mint from 'mint-ui'
import axios from "axios"
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'


Vue.config.productionTip = false;
axios.defaults.withCredentials=true
Vue.prototype.axios = axios

Vue.use(Mint);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
