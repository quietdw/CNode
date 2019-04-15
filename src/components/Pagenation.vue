<template>
  <div class="pagenation">
    <ul onselectstart="return false;">
      <li @click="onClick" button-data="previous">«</li>
      <li v-if="this.pages[0]>1">…</li>
      <li
        :class="[{'selected':page===currentpage},{'dot':typeof page ==='string'}]"
        v-for="(page,index) in pages"
        :key="index"
        @click="onClick(page)"
      >{{page}}</li>
      <li @click="onClick" button-data="next">»</li>
    </ul>
  </div>
</template>
<script>
import $ from "jquery";
export default {
  name: "Pagenation",
  data() {
    return {
      pages: [1, 2, 3, 4, 5, "…"],
      currentpage: 1
    };
  },
  props: ["current"],
  methods: {
    onClick(page) {
      if (typeof page === "object") {
        let buttonValue = page.target.getAttribute("button-data");
        let currentDom = $(".pagenation .selected");
        switch (buttonValue) {
          case "previous":
            currentDom.prev().click();
            break;
          case "next":
            currentDom.next().click();
            break;
          default:
            return;
        }
      } else if (typeof page === "number") {
        this.currentpage = page;
        if (this.pages.indexOf(page) === 4) {
          this.pages.shift();
          this.pages.splice(4, 0, page + 1);
        }
        if (this.pages.indexOf(page) === 0 && page > 1) {
          this.pages.unshift(page - 1);
          this.pages.splice(4, 1);
        }
      } else {
        return;
      }
      this.$emit("current-change", this.currentpage);
    }
  },
  created() {
    this.currentpage = this.current;
    if (this.currentpage > 5) {
      this.pages = [
        this.currentpage - 3,
        this.currentpage - 2,
        this.currentpage - 1,
        this.currentpage,
        this.currentpage + 1
      ];
    }
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
      &:hover {
        color: #999;
        background-color: #f5f5f5;
      }
      &.selected {
        color: #80bd01;
      }
      &.dot {
        cursor: default;
      }
      color: #778087;
      padding: 6px 12px;
      background-color: #fff;
      border: 1px solid #ddd;
      border-right-width: 0;
      font-size: 14px;
      cursor: pointer;
    }
  }
}
</style>
