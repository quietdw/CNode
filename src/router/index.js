import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import List from '@/components/List'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/hello/:hwmsg',
    name: 'HelloWorld',
    component: HelloWorld
  }, {
    path: '/',
    name: 'List',
    component: List
  }]
})
