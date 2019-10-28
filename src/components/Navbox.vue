<template>
  <div class="nav-box" v-if="active">
    <div class="nav-mask" @click="close"></div>
    <div class="nav-main" :class="{'active':show}">
      <i class="iconfont back-btn" @click="close">&#xe738;</i>
      <ul class="navbar-left">
        <li class="active">首页</li>
        <li>排行榜</li>
        <li>安利墙</li>
        <li>发现</li>
        <li>论坛</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: false,
      show: false
    };
  },
  methods: {
    open() {
      this.active = true;
      setTimeout(() => {
        this.show = true;
      });
    },
    close() {
      this.show = false;
      setTimeout(() => {
        this.active = false;
      },200);
    }
  }
};
</script>

<style scoped>
.back-btn {
  font-size: 18px;
  margin-bottom: 22px;
  display: block;
  cursor: pointer;
  opacity: 0.6;
}
.nav-box {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  z-index: 8888;
}
.nav-mask {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
}
.nav-main {
  position: fixed;
  top: 0;
  left: -73.6111111111%;
  margin: 0;
  padding: 25px 24px 15px;
  width: 73.6111111111%;
  min-height: 100%;
  border: none;
  background: #14b9c8;
  z-index: 9999;
  transition: all 0.25s;
  -webkit-transition: all 0.25s;
  box-sizing: border-box;
}

.nav-main.active {
  left: 0;
}

.navbar-left {
  padding: 0;
  margin: 0 -24px;
}

.navbar-left > li {
  position: relative;
  display: block;
  color: #fff;
}

.navbar-left > li.active {
  color: #fff;
  box-shadow: none;
  background-color: #12a7b4;
}

.navbar-left > li {
  margin: 5px 0;
  padding: 10px 5px 10px 39px;
  width: 100%;
  line-height: 20px;
  text-align: left;
  font-size: 18px;
  box-sizing: border-box;
}
</style>