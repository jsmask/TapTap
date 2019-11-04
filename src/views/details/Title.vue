<template>
  <div class="title">
    <span class="title-left">{{title}}</span>
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
    }
  }
};
</script>

<style scoped>
.title {
  padding: 20px 0;
  margin: 0 15px;
  overflow: hidden;
}
.title-left {
  float: left;
  position: relative;
  line-height: 20px;
  font-size: 18px;
  border-left: 4px solid #14b9c8;
  box-sizing: border-box;
  padding: 0 0 0 8px;
}
.title-right {
  float: right;
  position: relative;
  vertical-align: middle;
}
</style>