import Vue from 'vue'
import Router from 'vue-router'

import PostList from "../components/PostList";
import Article from "../components/Article";
import Slidebar from "../components/Slidebar";
import UserInfo from "../components/UserInfo";

Vue.use(Router)

export default new Router({
  routes: [{
      name: 'topic',
      path: '/topic/:id',
      components: {
        main: Article,
        slidebar: Slidebar
      }
    },
    {
      name: 'index',
      path: '/',
      components: {
        main: PostList
      }
    },
    {
      name: 'user',
      path: '/user/:loginname',
      components: {
        main: UserInfo,
        slidebar: Slidebar
      }
    }
  ]
})
