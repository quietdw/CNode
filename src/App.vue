<template>
  <div id="app">
    <Header></Header>
    <div class="main">
      <el-container>
        <el-main>
          <router-view name="main"></router-view>
        </el-main>
        <el-aside width="290px">
          <router-view name="slidebar"></router-view>
        </el-aside>
      </el-container>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    Header,
    Footer
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: 400;
}
li {
  list-style-type: none;
}
body {
  background: #e1e1e1;
  font-family: "Helvetica Neue", "Luxi Sans", "DejaVu Sans", Tahoma,
    "Hiragino Sans GB", STHeiti, sans-serif;
}
a {
  color: inherit;
  text-decoration: none;
}
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
.el-container {
  padding: 15px 5%;
  .el-main {
    padding: 0;
    padding-right: 15px;
  }
}

@import "./assets/markdown.css";
</style>
