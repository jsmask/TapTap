<template>
  <div class="content">
    <slot />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.content {
  padding: 15px 0;
  margin: 0 15px;
  box-sizing: border-box;
  background: #ffffff;
  position: relative;
      line-height: 24px;
}
.content a {
  color: #333;
}
.content p {
  margin: 0 0 10px;
  margin-bottom: 0;
  word-wrap: break-word;
  word-break: break-word;
}

</style>