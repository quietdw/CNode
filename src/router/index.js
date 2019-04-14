import Vue from 'vue'
import Router from 'vue-router'

import PostList from "../components/PostList";
import Article from "../components/Article";

Vue.use(Router)

export default new Router({
  routes: [{
      name: 'article',
      path: '/article/:id',
      component: Article
    },
    {
      name: 'index',
      path: '/',
      component: PostList
    }
  ]
})
