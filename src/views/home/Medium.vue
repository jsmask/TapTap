<template>
  <Scroll :probeType="2" ref="scroll" style="top:1rem;">
    <section style="background:#f2f2f2;">
      <ul class="md-type-box">
        <li class="md-type-item" v-for="item in typelist" :key="item._id">
          <div>
            <Lazy :src="item.pic" />
          </div>
          <p>{{item.title}}</p>
        </li>
      </ul>

      <Videocard v-for="(item,index) in videolist" :key="index" :info="item" />
    </section>
    <Footer />
  </Scroll>
</template>

<script>
import Footer from "components/Footer.vue";
import Scroll from "components/Scroll.vue";
import { reqVideoInfo, reqVideoList } from "network/api";
import Videocard from "./Videocard";

export default {
  name: "medium",
  data() {
    return {
      typelist: [],
      videolist: [],
      page: 1
    };
  },
  components: {
    Footer,
    Scroll,
    Videocard
  },
  created() {
    this.reqVideoInfo();
  },
  mounted() {
    this.$nextTick(() => {
      this.$refs.scroll.refresh();
    });
  },
  methods: {
    async reqVideoInfo() {
      let res = await reqVideoInfo();
      const { status, text, data } = res;
      if (status !== 1) {
        $toast(text);
        return false;
      }
      this.typelist.push(...data.type);
      this.reqVideoList();
    },
    async reqVideoList() {
      let res = await reqVideoList({
        page: this.page
      });
      const { status, text, data } = res;
      if (status !== 1) {
        $toast(text);
        return false;
      }
      this.videolist.push(...data.list);
      this.page++;
      this.$nextTick(() => {
        this.$refs.scroll.refresh();
      });
    }
  }
};
</script>

<style scoped>
.md-type-box {
  background: #ffffff;
  height: auto;
  padding: 0 20px 15px;
  margin-bottom: 8px;
  border: 0;
  border-radius: 0;
  box-sizing: border-box;
  display: flex;
  flex-flow: wrap;
  justify-content: space-around;
}
.md-type-item {
  width: 70px;
  margin-top: 10px;
}
.md-type-item > div {
  margin: 0 auto;
  width: 65px;
  height: 65px;
}
.md-type-item img {
  width: 65px;
  height: 65px;
  object-fit: cover;
}
.md-type-item > p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  line-height: 16px;
  width: 70px;
  font-size: 12px;
  color: #333;
  text-align: center;
  margin: 2px 0;
}
</style>
