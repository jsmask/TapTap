<template>
  <div class="card-box">
    <div class="card-head">
      <span v-if="info">
        <img :src="info.avatar" />
      </span>
      <span>{{info&&info.nickname}}</span>
    </div>
    <p class="card-title">{{info&&info.content}}</p>
    <Media :src="info&&info.video" :poster="info&&info.poster" />
    <p class="card-tips" v-if="info">
      <span>{{info.title}}</span>
    </p>
    <ul class="card-fn" v-if="info">
      <li :class="{'active':info.is_like}">
        <i class="iconfont">&#xe60c;</i>
        <span>{{info.like_num>0?info.like_num:'赞'}}</span>
      </li>
      <li>
        <i class="iconfont">&#xe690;</i>
        <span>{{info.talk_num>0?info.talk_num:'回复'}}</span>
      </li>
      <li>
        <i class="iconfont">&#xe72f;</i>
        <span>{{info.share_num>0?info.share_num:'分享'}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import Media from "components/Media";
export default {
  data() {
    return {
      timer: null,
      isplay: false,
      ismuted: true,
      progress: 0,
      currentTime: 0,
      duration: 0,
      isopen: false
    };
  },
  components: {
    Media
  },
  props: {
    info: Object
  },
  methods: {}
};
</script>

<style scoped>
.card-box {
  background: #fff;
  margin-bottom: 8px;
  padding: 15px 15px 12px;
  box-sizing: border-box;
}
.card-head img {
  width: 34px;
  height: 34px;
  object-fit: cover;
  display: inline-block;
  border-radius: 50%;
  vertical-align: middle;
  margin-right: 10px;
}
.card-head span {
  font-size: 14px;
  font-weight: 700;
}
.card-head {
  margin-bottom: 10px;
}

.card-title {
  font-size: 16px;
  color: #333;
  line-height: 26px;
  display: block;
  margin-bottom: 10px;
}

.card-tips {
  margin-bottom: 10px;
}
.card-tips span {
  color: #14b9c8;
  display: inline-flex;
  align-items: center;
  background: #e7f8f9;
  font-size: 12px;
  height: 24px;
  line-height: 24px;
  padding: 0px 8px;
  box-sizing: border-box;
  margin-right: 10px;
}
.card-fn {
  display: flex;
}
.card-fn > li {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: 0 10px;
}
.card-fn > li.active span,
.card-fn > li.active i {
  color: #14b9c8;
}
.card-fn > li span {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #999;
  font-size: 12px;
  width: 50px;
}
.card-fn i {
  font-size: 18px;
  color: #ccc;
  margin-right: 7px;
  vertical-align: middle;
}
</style>