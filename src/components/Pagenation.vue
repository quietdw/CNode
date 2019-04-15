<template>
  <div class="pagenation">
    <ul>
      <li>«</li>
      <li v-for="(page,index) in pages" :key="index">{{page}}</li>
      <li>»</li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pages: ["1", "2", "3", "4", "5", "···"]
    };
  }
};
</script>
<style lang="scss" scoped>
.pagenation {
  ul {
    display: flex;
    background-color: #fff;
    padding: 10px;
    li {
      &:first-child {
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
      }
      &:last-child {
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
        border-right-width: 1px;
      }
      padding: 6px 12px;
      background-color: #fff;
      border: 1px solid #ddd;
      border-right-width: 0;
      font-size: 14px;
    }
  }
}
</style>
