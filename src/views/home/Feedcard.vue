<template>
  <div class="feed-card">
    <img
      class="feed-pic"
      src="http://i2.tiimg.com/702446/749970417c2f5dc1.jpg"
      style="background: #14B9C8;"
      alt
    />
    <div class="feed-content">
      <h5 class="feed-origin">编辑推荐</h5>
      <div class="feed-info">
        <img
          src="http://i2.tiimg.com/702446/5a2a141d66cef367.png"
          class="feed-head"
          alt
        />
        <div class="feed-wbox">
          <h6 class="feed-title">厚厚的时光</h6>
          <p class="feed-description">解谜时光，品味爱情</p>
        </div>
        <div class="feed-sbox">
          <p class="review-count">263人评分</p>
          <p class="rating-score">
            <i class="iconfont">&#xe85f;</i>
            <span>9.2</span>
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
    src: String
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
  object-fit: cover;
  position: absolute;
  left: 15px;
  top: 15px;
  width: 345px;
  height: 345px;
  border-radius: 5px;
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
  border-radius: 5px;
  width: 50px;
  height: 50px;
  margin-right: 15px;
  display: block;
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
  line-height: 28px;
  font-weight: 700;
  color: #ffffff;
}
.feed-description {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #ffffff;
  line-height: 28px;
}
.feed-sbox p {
  color: #ffffff;
}
.review-count {
  font-size: 10px;
  line-height: 28px;
  font-weight: 700;
}
.feed-sbox {
  margin-left: auto;
  line-height: 28px;
  text-align: right;
}
.feed-sbox i {
  vertical-align: middle;
  display: inline-block;
  margin-right: 7px;
  font-size:16px;
}
.rating-score span {
  font-size: 18px;
  vertical-align: middle;
}
</style>