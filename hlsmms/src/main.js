import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
//elementUI的js和css

//引入公共样式im
import './assets/styles/public.css'
//引入axios
import axios from 'axios'
//把axios挂载在vue的原型上，vue实例中就可以无限使用（页面组件中去使用）
Vue.prototype.axios = axios;
//引入qs处理axios的post参数
import qs from 'qs'
//挂载原型方便后期的vue实例使用
Vue.prototype.qs = qs;









Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')