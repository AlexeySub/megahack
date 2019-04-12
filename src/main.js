// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Hdr from '../src/components/Hdr'
import Content from '../src/components/Content'
import SideBlock from '../src/components/SideBlock'
import Footer from '../src/components/Footer'
import ModalChat from '../src/components/ModalChat'

Vue.component('hdr', Hdr)
Vue.component('cnt', Content)
Vue.component('sideb', SideBlock)
Vue.component('ftr', Footer)
Vue.component('mchat', ModalChat)

Vue.use(BootstrapVue)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
