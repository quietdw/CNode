<template>
  <div class="user-info">
    <div class="loading" v-if="isloading">
      <div></div>
      <div></div>
      <div></div>
    </div>
    <section class="info" v-if="!isloading">
      <div class="navigate"></div>
      <div class="info-container">
        <div class="avatar">
          <img :src="userData.avatar_url" alt>
          {{userData.loginname}}
        </div>
        <p>{{userData.score}}</p>
        <a href>{{topicCollect}}个话题收藏</a>
        <div>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#n-github"></use>
          </svg>
          <a :href="`https://github.com/${userData.githubUsername}`">@{{userData.githubUsername}}</a>
        </div>
        <p>注册时间{{friendlyDate(userData.create_at)}}前</p>
      </div>
    </section>
    <section class="recent-topics" v-if="!isloading">
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
    </section>
    <section class="recent-replies" v-if="!isloading">
      <div class="header"></div>
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
  beforeMount() {
    let p1 = this.request(`user/${this.$route.params.loginname}`).then(
      response => {
        this.userData = response;
        this.userData.recent_topics.forEach((element, key) => {
          this.request(`topic/${element.id}`).then(res => {
            this.userData.recent_topics[key].reply_count = res.reply_count;
            this.userData.recent_topics[key].visit_count = res.visit_count;
          });
        });
        console.log(this.userData);
      }
    );

    let p2 = this.request(`topic_collect/${this.$route.params.loginname}`).then(
      response => {
        this.topicCollect = response.length;
      }
    );

    Promise.all([p1, p2])
      .then(() => {
        this.isloading = false;
      })
      .catch(error => {
        console.log(error);
      });
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
}
</style>