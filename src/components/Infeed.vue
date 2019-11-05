<template>
  <div ref="scroll" class="vr-wapper">
    <ul class="vr-content" ref="content">
      <slot />
    </ul>
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
      scrollX: true,
      scrollY: false,
      bounce: {
        top: false,
        bottom: false,
        left: true,
        right: true
      },
      clientWidth: 0,
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
      scrollX: this.scrollX,
      scrollY: this.scrollY,
      bounce: this.bounce,
      probeType: this.probeType,
      click: false,
      eventPassthrough: this.eventPassthrough,
      disableTouch:true
    });
    this.clientWidth = this.$refs.content.clientWidth;
    this.scroll.on("scroll", pos => {
      this.startY = pos.y;
      this.startX = pos.x;
      this.onScroll && this.onScroll(pos);
    });

    this.scroll.on("beforeScrollStart", () => {
      if (this.$refs.content.clientWidth !== this.clientWidth) {
        this.clientWidth = this.$refs.content.clientWidth;
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
.vr-content {
  overflow-y: hidden;
  overflow-x: auto;
  margin: 0;
  font-size: 0;
  white-space: nowrap;
}
.vr-wapper {
  overflow-x: auto;
  margin: 0;
  font-size: 0;
  white-space: nowrap;
}
</style>