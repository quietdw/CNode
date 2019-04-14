// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import request from "@/helpers/request.js";
import utils from "@/helpers/utils.js"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
Vue.prototype.request = request

Vue.filter('newTag', (value, data) => {
  if (data.top) {
    return "置顶";
  } else if (data.good) {
    return "精华";
  }
  return value;
})

Vue.use(utils)
Vue.use(ElementUI);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
  components: {
    App
  },
  template: '<App/>'
})
