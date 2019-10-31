<template>
  <div ref="scroll" class="wapper">
    <div class="content" ref="content">
      <slot />
    </div>
  </div>
</template>

<script>
import BScroll from "@better-scroll/core";
export default {
  data() {
    return {
      startX: 0,
      startY: 0,
      scroll: null,
      scrollY: true,
      bounce: {
        top: true,
        bottom: true,
        left: false,
        right: false
      },
      clientHeight: 0,
      eventPassthrough: "vertical"
    };
  },
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    onScroll: Function
  },
  created() {},
  mounted() {
    this.scroll = new BScroll(this.$refs.scroll, {
      scrollY: this.scrollY,
      bounce: this.bounce,
      probeType: this.probeType,
      click: true
    });
    this.clientHeight = this.$refs.content.clientHeight;
    this.scroll.on("scroll", pos => {
      this.startY = pos.y;
      this.startX = pos.x;
      this.onScroll && this.onScroll(pos);
    });

    this.scroll.on("beforeScrollStart", () => {
      if (this.$refs.content.clientHeight !== this.clientHeight) {
        this.clientHeight = this.$refs.content.clientHeight;
        this.refresh();
      }
    });
  },
  methods: {
    refresh() {
      this.scroll && this.scroll.refresh();
    },
    destroy() {
      this.scroll && this.scroll.destroy();
    },
    enable() {
      this.scroll && this.scroll.enable();
    },
    disable() {
      this.scroll && this.scroll.stop();
      this.scroll && this.scroll.disable();
    },
    scrollToElement(el, time) {
      this.scroll && this.scroll.scrollToElement(el, time);
    }
  }
};
</script>

<style scoped>
.wapper {
  width: 100%;
  height: auto;
  position: absolute;
  overflow: hidden;
  top: 0;
  bottom: 0;
}
</style>