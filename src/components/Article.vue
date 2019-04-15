<template>
  <div class="article">
    <div class="loading" v-if="isLoading">
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div class="container" v-else>
      <div class="main">
        <div class="header">
          <h1>
            <span v-if="post.top||post.good">{{friendlyTag(post.tab)|newTag(post)}}</span>
            {{post.title}}
          </h1>
          <ul>
            <li>发布于 {{friendlyDate(post.create_at)}}</li>
            <li>作者 {{post.author.loginname}}</li>
            <li>{{post.visit_count}} 次浏览</li>
            <li>来自 {{friendlyTag(post.tab)}}</li>
          </ul>
        </div>
        <div class="content" v-html="post.content"></div>
      </div>
      <div class="comments">
        <div class="header">
          <span>{{replies.length}}</span>回复
        </div>
        <div class="comment" v-for="(reply,index) in replies" :key="reply.id">
          <div class="avatar">
            <img :src="reply.author.avatar_url" :alt="reply.author.loginname">
          </div>
          <div class="comment-container">
            <div class="comment-info">
              <span>
                <router-link
                  :to="{name:'user',params:{loginname:reply.author.loginname}}"
                >{{reply.author.loginname}}</router-link>
              </span>
              <a>{{index+1}}楼·{{friendlyDate(reply.create_at)}}</a>
            </div>
            <div v-html="reply.content" class="comment-content"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Article",
  data() {
    return {
      isLoading: true,
      post: null,
      replies: []
    };
  },
  beforeMount() {
    this.request(`/topic/${this.$route.params.id}`, "GET")
      .then(response => {
        this.post = response;
        this.replies = response.replies;
        console.log(this.post);
        this.isLoading = false;
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>
<style lang="scss" scoped>
.article {
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
  .container {
    .main {
      margin-bottom: 13px;
      > .header {
        padding: 10px;
        background: #fff;
        border-radius: 3px 3px 0 0;
        border-bottom: solid 1px #e5e5e5;
        h1 {
          font-size: 22px;
          font-weight: 700;
          margin: 8px 0;
          display: inline-block;
          vertical-align: bottom;
          width: 75%;
          line-height: 130%;
        }
        ul {
          display: flex;
          font-size: 12px;
          color: #838383;
          > li {
            &::before {
              content: "•";
              padding: 0 5px;
            }
          }
        }
      }
      > .content {
      }
    }
    .comments {
      .header {
        padding: 10px;
        background-color: #f6f6f6;
        border-radius: 3px 3px 0 0;
        color: #444;
      }
      .comment {
        background: #fff;
        display: flex;
        border-top: 1px solid #f0f0f0;
        padding: 10px;
        &:last-child {
          border-radius: 0 0 5px 5px;
        }
        .avatar {
          img {
            width: 30px;
            height: 30px;
            border-radius: 3px;
          }
        }
        .comment-container {
          padding-left: 10px;
          .comment-info {
            font-size: 11px;
            color: #08c;
            > span {
              a {
                font-weight: bold;
                font-size: 12px;
                color: #666;
              }
            }
          }
          .comment-content {
          }
        }
      }
    }
  }
}
</style>
