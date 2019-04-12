<template>
  <ul>
    <li>
      <router-link :to="{name:'HelloWorld',params:{hwmsg:'我是传来的数据'}}">HelloWorld</router-link>
    </li>
  </ul>
</template>
<script>
export default {
  name: "List",
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
</style>