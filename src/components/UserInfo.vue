<template>
  <div class="user-info">
    <div class="loading" v-if="isloading">
      <div></div>
      <div></div>
      <div></div>
    </div>
    <section class="info" v-if="!isloading">
      <div class="navigate">
        <router-link to="/">主页</router-link>
        <span>/</span>
      </div>
      <div class="info-container">
        <div class="avatar">
          <img :src="userData.avatar_url" alt>
          <span>{{userData.loginname}}</span>
        </div>
        <p>{{userData.score}}积分</p>
        <a href>{{topicCollect}}个话题收藏</a>
        <div class="social">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#n-github"></use>
          </svg>
          <a :href="`https://github.com/${userData.githubUsername}`">@{{userData.githubUsername}}</a>
        </div>
        <p class="registerDate">注册时间{{friendlyDate(userData.create_at)}}前</p>
      </div>
    </section>
    <section class="recent-topics" v-if="!isloading&&userData.recent_topics.length>0">
      <div class="lists">
        <div class="list-header">最近创建的话题</div>
        <div class="list-container">
          <ul>
            <li v-for="list in userData.recent_topics" :key="list.id">
              <img :src="list.author.avatar_url" :alt="list.author.loginname">
              <span class="replay-count">
                <span>{{list.reply_count}}</span>
                /
                <span>{{list.visit_count}}</span>
              </span>
              <span class="title">
                <router-link :to="{name:'topic',params:{id:list.id}}">{{list.title}}</router-link>
              </span>
              <span class="last-replay">{{friendlyDate(list.last_reply_at)}}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <section class="recent-replies" v-if="!isloading&&userData.recent_replies.length>0">
      <div class="lists">
        <div class="list-header">最近回复的话题</div>
        <div class="list-container">
          <ul>
            <li v-for="list in userData.recent_replies" :key="list.id">
              <img :src="list.author.avatar_url" :alt="list.author.loginname">
              <span class="replay-count">
                <span>{{list.reply_count}}</span>
                /
                <span>{{list.visit_count}}</span>
              </span>
              <span class="title">
                <router-link :to="{name:'topic',params:{id:list.id}}">{{list.title}}</router-link>
              </span>
              <span class="last-replay">{{friendlyDate(list.last_reply_at)}}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "UserInfo",
  data() {
    return {
      userData: null,
      isloading: true,
      topicCollect: ""
    };
  },
  methods: {
    limitTo5() {
      if (this.userData.recent_topics.length > 5) {
        this.userData.recent_topics.splice(5);
      }
      if (this.userData.recent_topics.length > 5) {
        this.userData.recent_topics.splice(5);
      }
    },
    getCount(temp, type) {
      return Promise.all(
        type.map((element, key) => {
          return this.request(`topic/${element.id}`).then(res => {
            type[key].reply_count = res.reply_count;
            type[key].visit_count = res.visit_count;
            return temp;
          });
        })
      );
    }
  },
  beforeMount() {
    let p1 = this.request(`user/${this.$route.params.loginname}`).then(
      response => {
        let p3 = this.getCount(response, response.recent_replies);
        let p4 = this.getCount(response, response.recent_topics);
        Promise.all([p3, p4]).then(e => {
          this.userData = e[0][0];
          this.limitTo5();
          this.isloading = false;
        });
      }
    );

    let p2 = this.request(`topic_collect/${this.$route.params.loginname}`).then(
      response => {
        this.topicCollect = response.length;
      }
    );
  }
};
</script>
<style lang="scss" scoped>
.user-info {
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
  .info {
    .navigate {
      padding: 10px;
      background: #f6f6f6;
      color: #80bd01;
      border-radius: 5px 5px 0 0;
      > a:hover {
        text-decoration: underline;
      }
    }
    .info-container {
      padding: 10px;
      background: #fff;
      color: #666;
      border-top: 1px solid #e5e5e5;
      border-radius: 0 0 5px 5px;
      .avatar {
        img {
          width: 40px;
          height: 40px;
          border-radius: 3px;
          margin-right: 10px;
        }
        > span {
          display: inline-block;
          vertical-align: top;
          padding-top: 5px;
        }
      }
      > p {
        padding: 10px 0;
        color: #333;
      }
      > a {
        color: #778087;
        padding: 0.5em 0;
      }
      > .social {
        padding: 0.5em 0;
        > svg {
          margin-right: 5px;
          width: 1.4em;
          height: 1.4em;
        }
      }
      > .registerDate {
        color: #ababab;
      }
    }
  }
  .recent-topics,
  .recent-replies {
    margin-top: 15px;
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