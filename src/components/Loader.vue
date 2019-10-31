<template>
  <div class="page-load">
    <i class="iconfont">&#xe6b0;</i>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.page-load {
  margin: 10px auto;
  text-align: center;
  position: relative;
  height: 50px;
  line-height: 50px;
}
.page-load > i {
  font-size: 32px;
  color: #14b9c8;
  animation: move 0.8s linear infinite;
  display: block;
  width: 50px;
  height: 50px;
  margin: 0 auto;
}
@keyframes move {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>