<template>
  <div class="swiper-container" ref="container">
    <div class="swiper-wrapper">
      <slot />
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  data() {
    return {
      swiper: null
    };
  },
  props: {
    spaceBetween: {
      type: Number,
      default: 0
    }
  },
  created() {},
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.swiper = new Swiper(this.$refs.container, {
        slidesPerView: "auto",
        spaceBetween: this.spaceBetween,
        freeMode: true
      });
    }
  }
};
</script>

<style scoped>
</style>