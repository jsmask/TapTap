<template>
  <div class="home">
    <Navbar />
    <Taber />
    <keep-alive :include="['ios','android','medium']">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import Navbar from "components/Navbar.vue";
import Taber from "./Taber";

export default {
  name: "home",
  data() {
    return {};
  },
  components: {
    Navbar,
    Taber
  },
  created() {},
  mounted() {

  },
  methods: {}
};
</script>

<style scoped>
.home {
  position: relative;
  width: 100%;
  height: 100%;
  background: #666;
}
.home::before {
  content: "";
  position: absolute;
  top: 0px;
  left: 0;
  right: 0;
  bottom: 250px;
  background: #ffffff;
}
</style>
