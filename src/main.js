import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/font-awesome/css/font-awesome.min.css'

import MgButton from './components/button'

Vue.config.productionTip = false

Vue.use(MgButton)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
