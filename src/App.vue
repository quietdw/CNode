<template>
  <div id="app">
    <Header></Header>
    <PostList></PostList>
  </div>
</template>

<script>
import Header from "./components/Header";
import PostList from "./components/PostList";

export default {
  name: "App",
  components: {
    Header,
    PostList
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
</style>
