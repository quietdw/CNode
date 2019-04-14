<template>
  <div class="header">
    <div class="inner-container">
      <div class="container">
        <router-link to="/">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#n-cnode"></use>
          </svg>
        </router-link>
        <ul>
          <li>
            <a href="#">首页</a>
          </li>
          <li>
            <a>新手入门</a>
          </li>
          <li>
            <a>API</a>
          </li>
          <li>
            <a>关于</a>
          </li>
          <li>
            <a>注册</a>
          </li>
          <li>
            <a>登陆</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
$background: #444;

.header {
  font-size: 13px;
  background: $background;
  width: 100%;
  > .inner-container {
    width: 90%;
    margin: 0 auto;
    padding: 10px 5px 12px 5px;
    display: flex;
    .container {
      width: 100%;
      min-width: 960px;
      max-width: 1400px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      svg {
        width: 9.230769em;
        height: 2.153846em;
      }
      > ul {
        display: flex;
        align-items: center;
        > li {
          padding: 0 15px;
          color: #ccc;
          > a {
            &:hover {
              color: #fff;
            }
          }
        }
      }
    }
  }
}
</style>
