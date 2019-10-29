<template>
  <section>
    <Feedcard :feed="feedinfo" />

    <div class="home-content">
      <div class="home-box">
        <mt-cell class="home-cell" title="安利墙" to value="查看更多"></mt-cell>
        <Swiper class="review-list" ref="reviewSwiper">
          <SwiperItem class="review-item" v-for="item in reviewlist" :key="item._id">
            <p class="review-title">
              <Lazy class="author-avatar" :src="item.avatar" />
              <span class="taptap-user">{{item.nickname}}</span>
              <span class="review-action">评价</span>
              <span class="app-name">{{item.gamename}}</span>
            </p>
            <p class="review-star">
              <i
                class="iconfont"
                v-for="(s,o) in 5"
                :class="{'active':s<=~~item.star}"
                :key="o"
              >&#xe600;</i>
            </p>
            <p class="review-content" v-html="item.content"></p>
            <div class="review-pic" :style="{'background-color': $color()}">
              <Lazy :src="item.pic" />
            </div>
          </SwiperItem>
        </Swiper>
      </div>

      <Special v-if="speciallist[0]" :title="speciallist[0].title" :pic="speciallist[0].pic" />

      <Card v-if="cardlist[0]" :card="cardlist[0]" />

      <div class="home-box">
        <mt-cell class="home-cell" title="即将开测" to value="查看更多"></mt-cell>
        <Swiper class="try-list" ref="trySwiper">
          <SwiperItem class="try-item" v-for="item in trylist" :key="item._id">
            <p class="try-item-date">{{item.date}}</p>
            <div class="try-item-pic" :style="{'background-color': $color()}">
              <Lazy :src="item.face" />
            </div>
            <p class="try-item-name">{{item.name}}</p>
          </SwiperItem>
        </Swiper>
      </div>

      <div class="home-box">
        <mt-cell class="home-cell" title="玩赏家推荐游戏" to value="查看更多"></mt-cell>
        <Swiper class="review-list" ref="playerSwiper">
          <SwiperItem class="review-item" v-for="item in playerlist" :key="item._id">
            <p class="review-title">
              <Lazy class="author-avatar" :src="item.avatar" />
              <span class="taptap-user">{{item.nickname}}</span>
              <span class="review-action">评价</span>
              <span class="app-name">{{item.gamename}}</span>
            </p>
            <p class="review-star">
              <i
                class="iconfont"
                v-for="(s,o) in 5"
                :class="{'active':s<=~~item.star}"
                :key="o"
              >&#xe600;</i>
            </p>
            <p class="review-content" v-html="item.content"></p>
            <div class="review-pic" :style="{'background-color': $color()}">
              <Lazy :src="item.pic" />
            </div>
          </SwiperItem>
        </Swiper>
      </div>

      <Special v-if="speciallist[1]" :title="speciallist[1].title" :pic="speciallist[1].pic" />

      <Card v-if="cardlist[1]" :card="cardlist[1]" />

      <Special v-if="speciallist[2]" :title="speciallist[2].title" :pic="speciallist[2].pic" />

      <Card v-if="cardlist[2]" :card="cardlist[2]" />

      <Special v-if="speciallist[3]" :title="speciallist[3].title" :pic="speciallist[3].pic" />

      <Card v-for="(item,index) in morelist" :key="index" :card="item" />

      <div class="more-box">
        <mt-button class="more-btn" @click="loadMore">更多</mt-button>
      </div>
    </div>
  </section>
</template>

<script>
import Card from "./Card";
import Special from "./Special";
import Feedcard from "./Feedcard";
import Swiper from "components/Swiper.vue";
import SwiperItem from "components/SwiperItem.vue";
import { reqIosInfo, reqHomeMore } from "network/api";

export default {
  name: "ios",
  data() {
    return {
      feedinfo: null,
      reviewlist: [],
      trylist: [],
      speciallist: [],
      cardlist: [],
      playerlist: [],
      morelist: [],
      page: 1
    };
  },
  components: {
    Feedcard,
    Swiper,
    SwiperItem,
    Card,
    Special
  },
  created() {
    this.reqIosInfo();
  },
  mounted() {},
  methods: {
    async reqIosInfo() {
      let res = await reqIosInfo();
      const { status, data, text } = res;
      if (status !== 1) {
        this.$toast(text);
        return false;
      }
      this.feedinfo = data.feed;
      this.reviewlist.push(...data.review);
      this.trylist.push(...data.try);
      this.speciallist.push(...data.special);
      this.cardlist.push(...data.card);
      this.playerlist.push(...data.player);

      this.$nextTick(() => {
        this.$refs.trySwiper.init();
        this.$refs.reviewSwiper.init();
        this.$refs.playerSwiper.init();
      });
    },
    async loadMore() {
      let res = await reqHomeMore({
        type: "ios",
        page: this.page
      });
      const { status, data, text } = res;
      if (status !== 1) {
        this.$toast(text);
        return false;
      }
      this.morelist.push(...data.list);
      this.page++;
    }
  }
};
</script>

<style scoped>
.more-box {
  background: #fff;
  padding: 30px 0px;
  box-sizing: border-box;
}
.more-btn {
  border-color: #12a7b4;
  background: #12a7b4;
  margin: 0px auto;
  width: 100px;
  color: #fff;
  display: block;
}
.home-content {
  padding: 0;
  box-sizing: border-box;
}
.home-box {
  padding: 0 0 15px;
  border-bottom: 1px solid #f1f1f1;
  background: #fff;
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
.review-pic,
.review-pic img {
  position: absolute;
  right: 15px;
  width: 50px;
  height: 50px;
  bottom: 20px;
  border-radius: 10px;
}
.review-pic img {
  position: absolute;
  left: 0;
  top: 0;
  width: 50px;
  height: 50px;
  object-fit: cover;
}
.taptap-user {
  max-width: 80px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: inline-block;
}
.app-name {
  max-width: 120px;
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

.try-list {
  height: 166px;
  box-sizing: border-box;
  padding-top: 10px;
}

.try-item {
  width: 70px;
  margin-right: 15px;
}

.try-item:first-of-type {
  margin-left: 15px;
}

.try-item-pic {
  width: 100%;
  height: 70px;
  overflow: hidden;
  border-radius: 15px;
  margin: 8px 0;
}

.try-item-pic img {
  width: 100%;
  height: 70px;
  object-fit: cover;
}

.try-item-date {
  width: 100%;
  font-size: 12px;
  line-height: 1;
  height: 12px;
  color: #999;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.try-item-name {
  display: -webkit-box;
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  max-height: 40px;
  overflow: hidden;
  white-space: normal;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-break: break-all;
}
</style>
