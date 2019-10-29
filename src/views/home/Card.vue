<template>
  <div class="crad-item">
    <p>编辑推荐</p>
    <div class="spec-warp">
      <div :style="{'background-color': $color()}">
        <Lazy :src="card&&card.pic" />
      </div>
    </div>
    <div class="feed-info" v-if="card">
      <div class="feed-head" :style="{'background-color': $color()}">
        <Lazy :src="card.face" class="feed-head" />
      </div>
      <div class="feed-wbox">
        <h6 class="feed-title">{{card.name}}</h6>
        <p class="feed-description">{{card.desc}}</p>
      </div>
      <div class="feed-sbox">
        <p class="review-count">{{card.num}}人评分</p>
        <p class="rating-score">
          <i class="iconfont">&#xe85f;</i>
          <span>{{card.score}}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    card: Object
  }
};
</script>
<style scoped>
.crad-item {
  padding: 15px;
  width: 100%;
  box-sizing: border-box;
  border-bottom: 1px solid #f1f1f1;
  background: #fff;
}
.crad-item > p {
  font-size: 13px;
  padding: 0;
  color: #999;
  line-height: 1;
}
.crad-item > .spec-warp {
  margin: 12px auto;
  width: 100%;
  position: relative;
  height: 138px;
  overflow: hidden;
  border-radius: 5px;
}
.crad-item > .spec-warp img {
  width: 100%;
  height: 100%;
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
  color: #333;
}
.feed-description {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #999;
  line-height: 24px;
}
.feed-sbox p {
  color: #14b9c8;
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
  color: #14b9c8;
}
.rating-score span {
  font-size: 16px;
  vertical-align: middle;
}
.feed-head {
  border-radius: 10px;
  width: 50px;
  height: 50px;
  margin-right: 15px;
  display: block;
}

.feed-head {
  width: 50px;
  height: 50px;
  object-fit: cover;
}
</style>