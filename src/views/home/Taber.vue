<template>
  <div class="tab-menu home-tab">
    <router-link
      to="/android"
      class="tab-item"
      active-class="active"
      :class="{'active':$route.path==='/'}"
    >Android</router-link>
    <router-link to="/ios" class="tab-item" active-class="active">iOS</router-link>
    <router-link to="/video" class="tab-item" active-class="active">视频</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.tab-menu.home-tab {
  position: fixed;
  top: 50px;
  left: 0;
  width: 100%;
  z-index: 10;
  display: -webkit-box;
  display: flex;
  background: #fff;
  box-shadow: 0 1px 0 0 rgba(238, 238, 238, 0.5), 0 0 10px 0 rgba(0, 0, 0, 0.08);
}
.tab-menu.home-tab .tab-item {
  position: relative;
  -webkit-box-flex: 1;
  flex: 1;
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: 14px;
  color: #999;
}
.tab-menu.home-tab .tab-item.active {
  color: #14b9c8;
  font-weight: 700;
}
.tab-menu.home-tab .tab-item:not(:last-child):after {
  content: "";
  display: block;
  width: 1px;
  height: 5.3333333333vw;
  background: #f1f1f1;
  position: absolute;
  right: 0;
  top: 50%;
  -webkit-transform: translate3d(0, -50%, 0);
  transform: translate3d(0, -50%, 0);
}
.tab-menu.home-tab .tab-item.active:before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  -webkit-transform: translate3d(-50%, 0, 0);
  transform: translate3d(-50%, 0, 0);
  display: block;
  width: 5.3333333333vw;
  height: 0.8vw;
  background: #14b9c8;
  box-shadow: 0 1.0666666667vw 1.6vw 0 rgba(20, 185, 200, 0.2);
  border-radius: 1px;
}
</style>