// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(MintUI)

//这里是另一个UI框架
// import MuseUI from 'muse-ui'
// import 'muse-ui/dist/muse-ui.css'
// Vue.use(MuseUI)




Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
console.log('\n %c jingqw %c https://github.com/jqw755 \n\n', 'color: #fff; background: #1abc9c; padding:5px 0;border-radius: 5px 0 0 5px;', 'color: #34495e;background: #edeef0; padding:5px 0;border-radius: 0 5px 5px 0')
