import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
//elementUI的js和css

//引入公共样式im
import './assets/styles/public.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')