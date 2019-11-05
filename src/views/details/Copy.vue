<template>
  <div class="copy">
    <slot />
    <i class="iconfont" @click.stop="doCopy">&#xe7e3;</i>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      default: ""
    }
  },
  methods: {
    doCopy() {
      this.$copyText(this.content).then(
        e => {
          this.$toast({ message: "复制成功" });
        },
        e => {
          this.$toast({ message: "复制成功" });
        }
      );
    }
  }
};
</script>

<style scoped>
.copy {
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 15px;
}
.copy > i {
  color: #14b9c8;
  font-size: 16px;
  cursor: pointer;
}
</style>