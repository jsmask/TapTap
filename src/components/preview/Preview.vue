<template>
  <div class="preview" v-show="active" @click="close">
    <img
      :src="src"
      alt
      @load="load"
      @error="error"
      class="show-img"
      ref="img"
      :class="{'active':active}"
    />
  </div>
</template>

<script>
import { Indicator } from "mint-ui";
export default {
  name: "Preview",
  data() {
    return {
      src: "",
      active: false
    };
  },
  mounted() {},
  methods: {
    open(src) {
      this.src = src;
      Indicator.open();
    },
    close() {
      this.active = false;
      this.src = "";
    },
    error() {
      Indicator.close();
      this.close();
    },
    load() {
      if (this.src === "") return;
      let img = this.$refs.img;
      let fw = document.body.clientWidth;
      let fh = document.body.clientHeight;
      let w = img.width;
      let h = img.height;

      Indicator.close();
      if (w >= h) {
        img.style.height = `${fh * 0.9}px`;
        img.style.width = "auto";
      } else {
        img.style.width = `${fw * 0.9}px`;
        img.style.height = "auto";
      }
      this.active = true;
    }
  }
};
</script>

<style scoped>
.preview {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 1);
  z-index: 8888;
}
.show-img {
  opacity: 0;
  transition: 0.2s all;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.show-img.active {
  opacity: 1;
}
</style>