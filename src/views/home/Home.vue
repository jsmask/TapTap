<template>
  <div class="home">
    <Navbar />
    <Taber />
    <Scroll :probeType="1" ref="scroll" style="top:1rem;">
      <section>
        <Feedcard />

        <div class="home-content">
          <div class="home-box">
            <mt-cell class="home-cell" title="安利墙" to value="查看更多"></mt-cell>

            <Swiper class="review-list" ref="reviewSwiper" :spaceBetween="0">
              <SwiperItem class="review-item" v-for="item in reviewlist" :key="item._id">
                <p class="review-title">
                  <img class="author-avatar" :src="item.avatar" />
                  <span class="taptap-user">{{item.nickname}}</span>
                  <span class="review-action">评价</span>
                  <span class="app-name">{{item.gamename}}</span>
                </p>
                <p class="review-star">
                  <i class="iconfont" v-for="(s,o) in 5" :class="{'active':s<=~~item.star}" :key="o">&#xe600;</i>
                </p>
                <p class="review-content" v-html="item.content"></p>
                <img class="review-pic" :src="item.pic" />
              </SwiperItem>
            </Swiper>
          </div>

          <div class="home-box">
            <mt-cell class="home-cell" title="即将开测" to value="查看更多"></mt-cell>
          </div>
        </div>
        <Footer />
      </section>
    </Scroll>
  </div>
</template>

<script>
import Navbar from "components/Navbar.vue";
import Footer from "components/Footer.vue";
import Scroll from "components/Scroll.vue";
import Taber from "./Taber";
import Feedcard from "./Feedcard";
import Swiper from "components/Swiper.vue";
import SwiperItem from "components/SwiperItem.vue";
import { getHomeReviewList } from "network/api";
export default {
  name: "home",
  data() {
    return {
      reviewlist: []
    };
  },
  components: {
    Navbar,
    Footer,
    Scroll,
    Taber,
    Feedcard,
    Swiper,
    SwiperItem
  },
  created() {
    this.getHomeReviewList();
  },
  mounted() {
    this.$nextTick(() => {
      this.$refs.scroll.refresh();
    });
  },
  methods: {
    async getHomeReviewList() {
      let res = await getHomeReviewList();
      if (res.status !== 1) {
        this.$toast(res.text);
        return false;
      }
      this.reviewlist.push(...res.data.list);
      this.$nextTick(() => {
        this.$refs.reviewSwiper.init();
      });
    }
  }
};
</script>

<style scoped>
.home-content {
  padding: 0;
  box-sizing: border-box;
}
.home-box {
  padding: 0 0 15px;
  border-bottom: 1px solid #f1f1f1;
}
.home-cell {
  padding: 0 15px;
}

.review-list {
  height: 145px;
}

.review-list .review-item:first-of-type {
  margin-left: 15px;
}

.review-list .review-item {
  display: inline-block;
  border-radius: 5px;
  width: 295px;
  padding: 15px;
  box-sizing: border-box;
  background: #f8f8f8;
  vertical-align: top;
  height: 145px;
  margin-right: 15px;
  position: relative;
}

.review-title > img {
  width: 20px;
  height: 20px;
  margin-right: 5px;
  border-radius: 50%;
}
.review-content {
  overflow: hidden;
  padding-right: 65px;
  font-size: 13px;
  color: #666;
  height: 60px;
  line-height: 20px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  text-overflow: ellipsis;
  white-space: normal;
  margin-top: 15px;
}
.review-pic {
  position: absolute;
  right: 15px;
  width: 50px;
  height: 50px;
  object-fit: cover;
  bottom: 20px;
}
.taptap-user {
  max-width: 100px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: inline-block;
}
.app-name {
  max-width: 100px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: inline-block;
}
.review-action {
  white-space: nowrap;
  overflow: hidden;
  display: inline-block;
  color: #999;
  margin: 0 5px;
}
.review-star {
  height: 14px;
  margin: 5px 0 10px 0;
}
.review-star > i {
  font-size: 12px;
  margin-right: 3px;
  color: #cccccc;
}
.review-star > i.active {
  color: #14b9c8;
}
</style>
