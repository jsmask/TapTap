<template>
  <div class="word">
    <div class="content" :style="{'height':isOpen?fullHeight:height+'px'}">
      <slot />
    </div>
    <p class="btn-box">
      <span @click.stop="fold">
        {{isOpen?'收起':'展开'}}
        <i class="iconfont" :class="{'active':isOpen}">&#xe61a;</i>
      </span>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fullHeight: "auto",
      isOpen: false
    };
  },
  props: {
    open: {
      type: Boolean,
      default: false
    },
    height: {
      type: Number,
      default: 100
    },
    complete: Function
  },
  mounted() {
    this.isOpen = this.open;
  },
  methods: {
    fold() {
      this.isOpen = !this.isOpen;
      setTimeout(() => {
        this.complete && this.complete();
      });
    }
  }
};
</script>

<style scoped>
.content {
  overflow: hidden;
  transition: height 0.2s;
}
.word {
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
.btn-box {
  text-align: center;
  height: 34px;
  line-height: 34px;
}
.btn-box span {
  font-size: 14px;
  cursor: pointer;
}
.btn-box i {
  color: #333;
  vertical-align: middle;
  position: relative;
  display: inline-block;
  transition: 0.2s all;
}

.btn-box i.active {
  transform: rotate(180deg);
}
</style>