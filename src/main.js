// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import request from "@/helpers/request.js";
import utils from "@/helpers/utils.js"

Vue.config.productionTip = false

Vue.prototype.request = request
Vue.use(utils)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
