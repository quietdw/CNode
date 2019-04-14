<template>
  <div class="post-list">
    <div class="loading" v-if="isLoading">
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div class="lists" v-else>
      <div class="list-header">
        <a href="#" :class="{'current-tab':true}">全部</a>
        <a>精华</a>
        <a>分享</a>
        <a>问答</a>
        <a>招聘</a>
        <a>客户端测试</a>
      </div>
      <div class="list-container">
        <ul>
          <li v-for="list in lists" :key="list.id">
            <img :src="list.author.avatar_url" :alt="list.author.loginname">
            <span class="replay-count">
              <span>{{list.reply_count}}</span>
              /
              <span>{{list.visit_count}}</span>
            </span>
            <span
              class="tag"
              :class="{'top':list.top,'good':list.good}"
            >{{friendlyTag(list.tab)|newTag(list)}}</span>
            <span class="title">
              <router-link :to="{name:'topic',params:{id:list.id}}">{{list.title}}</router-link>
            </span>
            <span class="last-replay">{{friendlyDate(list.last_reply_at)}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "PostList",
  data() {
    return {
      isLoading: true,
      lists: []
    };
  },
  beforeMount() {
    this.request("/topics", "get", { limit: 20 }).then(response => {
      this.lists = response;
      this.isLoading = false;
      console.log(this.lists);
    });
  },
  mounted() {}
};
</script>
<style lang="scss" scoped>
.post-list {
  margin: 0 auto;
  .loading {
    display: block;
    position: relative;
    width: 64px;
    height: 64px;
    margin: 0 auto;
    > div {
      display: inline-block;
      position: absolute;
      left: 6px;
      width: 13px;
      background: #fff;
      animation: loading 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
      &:nth-child(1) {
        left: 6px;
        animation-delay: -0.24s;
      }
      &:nth-child(2) {
        left: 26px;
        animation-delay: -0.12s;
      }
      &:nth-child(3) {
        left: 45px;
        animation-delay: 0;
      }
    }
    @keyframes loading {
      0% {
        top: 6px;
        height: 51px;
      }
      50%,
      100% {
        top: 19px;
        height: 26px;
      }
    }
  }
  .lists {
    .list-header {
      padding: 10px;
      background-color: #f6f6f6;
      border-radius: 3px 3px 0 0;
      > a {
        margin: 0 10px;
        color: #80bd01;
        &.current-tab {
          background-color: #80bd01;
          color: #fff;
          padding: 3px 4px;
          border-radius: 3px;
        }
      }
    }
    .list-container {
      ul {
        > li {
          padding: 10px;
          background: #fff;
          font-size: 14px;
          display: flex;
          align-items: center;
          &:hover {
            background: #f5f5f5;
          }
          &:not(:first-child) {
            border-top: 1px solid #f0f0f0;
          }
          &:last-child {
            border-radius: 0 0 3px 3px;
          }
          > img {
            width: 30px;
            height: 30px;
            border-radius: 3px;
          }
          > .replay-count {
            width: 70px;
            color: #9e78c0;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
            > span:last-child {
              font-size: 10px;
              color: #b4b4b4;
            }
          }
          > .tag {
            background-color: #e5e5e5;
            color: #999;
            padding: 2px 4px;
            border-radius: 3px;
            font-size: 12px;
            &.top,
            &.good {
              background: #80bd01;
              color: #fff;
            }
          }
          > .title {
            min-width: 0;
            flex: 1;
            overflow: hidden;
            margin-left: 5px;
            > a {
              max-width: 70%;
              white-space: nowrap;
              display: inline-block;
              vertical-align: middle;
              font-size: 16px;
              line-height: 30px;
              overflow: hidden;
              text-overflow: ellipsis;
            }
          }
          > .last-replay {
          }
        }
      }
    }
  }
}
</style>