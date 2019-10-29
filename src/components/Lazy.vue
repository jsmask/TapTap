<template>
  <img v-lazy="src" :alt="alt" @load="loaded" ref="img" />
</template>

<script>
export default {
  name: "Lazy",
  data() {
    return {
      ld: false
    };
  },
  props: {
    alt: {
      type: String,
      defalut: ""
    },
    src: {
      type: String,
      defalut: ""
    }
  },
  created() {},
  methods: {
    loaded() {
      if (this.$refs.img&&this.$refs.img.src === this.src) {
        this.$refs.img.style.opacity = 1;
      }
    }
  }
};
</script>

<style scoped>
img {
  opacity: 0;
  transition: 0.45s all ease-in-out 0.05s;
}
</style>