import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
// import ZButton from '@/components/z-button/index.js';
// Vue.component('ZButton', ZButton)
import zCom from './index.js';
Vue.use(zCom)
console.log(zCom.zButton);
// Vue.component('a-button',zButton)
new Vue({
  render: h => h(App),
}).$mount('#app')
