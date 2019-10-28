<template>
  <nav class="navbar">
    <i class="iconfont nav-btn" @click="openNavBox">&#xe62b;</i>
    <img class="logo" src="~assets/logo2.png" alt="taptap" />
    <div class="avatar">
      <img src="~assets/avatar.png" alt="avatar" />
    </div>
    <i class="iconfont search-btn">&#xe6c6;</i>
    <Navbox ref="navbox" />
  </nav>
</template>

<script>
import Navbox from "components/Navbox.vue";
export default {
  data() {
    return {};
  },
  components: {
    Navbox
  },
  methods: {
    openNavBox() {
      this.$refs.navbox.open();
    }
  }
};
</script>

<style scoped>
nav.navbar {
  margin-bottom: 0;
  color: #fff;
  border: none;
  border-radius: 0;
  background-color: #14b9c8;
  height: 50px;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-height: auto;
  z-index: 7777;
  font-size: 14px;
  box-sizing: border-box;
  padding: 0 10px;
}

.logo {
  margin: 12px 10px 11px 12px;
  height: 28px;
  width: 93px;
  display: block;
  float: left;
}
.nav-btn {
  font-size: 22px;
  display: block;
  float: left;
  margin: 8.5px -5px 8.5px 0px;
  padding: 5px 0px;
  border: none;
  background: 0 0;
  cursor: pointer;
}

.search-btn {
  font-size: 24px;
  display: block;
  float: right;
  margin: 14px 8px 0 0;
  border: none;
  background: 0 0;
  cursor: pointer;
}
.avatar {
  display: block;
  padding: 0;
  margin: 11px 0 11px 0;
  width: 25px;
  height: 25px;
  border-width: 1px;
  text-align: center;
  color: #fff;
  border: 2px solid #fff;
  background: #fff;
  overflow: hidden;
  float: right;
  border-radius: 50%;
}

.avatar > img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}
</style>