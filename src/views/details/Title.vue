<template>
  <div class="title">
    <span class="title-left" :class="size">{{title}}</span>
    <span class="title-right">
      <slot />
    </span>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ""
    },
    size: {
      type: String,
      default: "middle"
    }
  }
};
</script>

<style scoped>
.title {
  padding: 20px 15px;
  overflow: hidden;
  background: #ffffff;
}
.title-left {
  float: left;
  position: relative;
  line-height: 20px;

  border-left: 4px solid #14b9c8;
  box-sizing: border-box;
  padding: 0 0 0 8px;
}
.title-left.middle {
  font-size: 18px;
}
.title-left.small {
  font-size: 16px;
}
.title-right {
  float: right;
  position: relative;
  vertical-align: middle;
}
</style>