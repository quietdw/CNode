<template>
  <div class="footer">
    <div class="inner-container">
      <p>
        <span>RSS</span>
        <span>
          <a href="https://github.com/quietdw/CNode">源码地址</a>
        </span>
      </p>
      <p>CNode 社区为国内最专业的 Node.js 开源技术社区，致力于 Node.js 的技术研究。</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "Footer",
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.footer {
  width: 100%;
  background: #fff;
  .inner-container {
    width: 90%;
    min-width: 960px;
    margin: 0 auto;
    padding: 20px 0;
    font-size: 13px;
    line-height: 2em;
    p {
      font-size: 14px;
      a {
      }
    }
  }
}
</style>