<template>
  <div class="home">
    <Navbar />
    <Taber />
    <Scroll :probeType="1" ref="scroll" style="top:1rem;">
      <router-view></router-view>
      <Footer />
    </Scroll>
  </div>
</template>

<script>
import Navbar from "components/Navbar.vue";
import Footer from "components/Footer.vue";
import Scroll from "components/Scroll.vue";
import Taber from "./Taber";
import Android from "./Android";

export default {
  name: "home",
  data() {
    return {};
  },
  components: {
    Navbar,
    Footer,
    Scroll,
    Taber,
    Android
  },
  created() {},
  mounted() {
    this.$nextTick(() => {
      this.$refs.scroll.refresh();
    });
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
