<template>
  <div class="feed-card">
    <div class="feed-pic" :style="{'background-color':feed&&feed.color}">
      <Lazy v-if="feed" :src="feed.pic" :key="feed._id" />
    </div>
    <div class="feed-bottom"></div>
    <div class="feed-content" v-if="feed">
      <h5 class="feed-origin">编辑推荐</h5>
      <div class="feed-info">
        <div class="feed-head" :style="{'background-color':feed&&feed.color}">
          <Lazy :src="feed.face" />
        </div>
        <div class="feed-wbox">
          <h6 class="feed-title">{{feed.name}}</h6>
          <p class="feed-description">{{feed.desc}}</p>
        </div>
        <div class="feed-sbox">
          <p class="review-count">{{feed.num}}人评分</p>
          <p class="rating-score">
            <i class="iconfont">&#xe85f;</i>
            <span>{{feed.score.toFixed(1)}}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    feed: Object
  }
};
</script>

<style scoped>
.feed-card {
  width: 100%;
  height: 375px;
  box-sizing: border-box;
  background: #ffffff;
  padding: 15px;
  overflow: hidden;
  position: relative;
  border-radius: 5px;
}
.feed-pic {
  position: absolute;
  left: 15px;
  top: 15px;
  width: 345px;
  height: 345px;
  border-radius: 5px;
  overflow: hidden;
}
.feed-pic img {
  position: absolute;
  left: 0;
  top: 0;
  width: 345px;
  height: 345px;
  object-fit: cover;
}
.feed-content {
  position: relative;
  z-index: 2;
  box-sizing: border-box;
  padding: 15px;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
}
.feed-head {
  border-radius: 12px;
  width: 50px;
  height: 50px;
  margin-right: 15px;
  display: block;
  object-fit: cover;
}
.feed-head img {
  width: 50px;
  height: 50px;
  object-fit: cover;
}
.feed-info {
  display: flex;
  align-items: center;
}
.feed-origin {
  font-weight: normal;
  color: #ffffff;
}
.feed-title {
  font-size: 16px;
  line-height: 26px;
  font-weight: 700;
  color: #ffffff;
}
.feed-description {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #ffffff;
  line-height: 24px;
  width: 190px;
}
.feed-sbox p {
  color: #ffffff;
}
.review-count {
  font-size: 10px;
  line-height: 26px;
  font-weight: 700;
}
.feed-sbox {
  margin-left: auto;
  line-height: 24px;
  text-align: right;
}
.feed-sbox i {
  vertical-align: middle;
  display: inline-block;
  margin-right: 7px;
  font-size: 15px;
}
.rating-score span {
  font-size: 16px;
  vertical-align: middle;
}
.feed-bottom {
  background-image: linear-gradient(to bottom, rgba(40, 37, 56, 0), #282538);
  position: absolute;
  bottom: 15px;
  left: 15px;
  right: 15px;
  height: 118px;
  border-radius: 0 0 5px 5px;
}
</style>