import Vue from 'vue'
import Router from 'vue-router'

import PostList from "../components/PostList";
import Article from "../components/Article";
import Slidebar from "../components/Slidebar";
import UserInfo from "../components/UserInfo";
import IndexSidebar from "../components/IndexSidebar";

Vue.use(Router)

const router = new Router({
  routes: [{
      name: 'topic',
      path: '/topic/:id&:loginname',
      components: {
        main: Article,
        slidebar: Slidebar
      }
    },
    {
      name: 'index',
      path: '/',
      components: {
        main: PostList,
        slidebar: IndexSidebar
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

export default router
