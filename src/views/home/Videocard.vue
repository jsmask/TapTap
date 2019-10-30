<template>
  <div class="card-box">
    <div class="card-head">
      <span v-if="info">
        <img :src="info.avatar" />
      </span>
      <span>{{info&&info.nickname}}</span>
    </div>
    <p class="card-title">{{info&&info.content}}</p>
    <div class="card-video" @click.stop="open">
      <video v-if="info" :muted="ismuted" :src="info.video" :poster="info.poster" ref="video"></video>
      <i class="iconfont" @click.stop="play" v-show="!isplay">&#xe60a;</i>
      <div class="video-fn" v-show="isopen">
        <p class="video-bar">
          <span :style="{'width':progress*100+'%'}"></span>
        </p>
        <span @click.stop="music" :class="{'stop':ismuted}" class="music-box">
          <i class="iconfont music-btn">&#xeca5;</i>
        </span>
        <i @click.stop="full" class="iconfont full-btn">&#xe62f;</i>
        <i @click.stop="play" v-show="!isplay" class="iconfont play-btn">&#xe60a;</i>
        <i @click.stop="pause" v-show="isplay" class="iconfont pause-btn">&#xe663;</i>
        <span
          class="video-time"
          v-if="isopen"
        >{{secondsFormat(~~currentTime)}} / {{secondsFormat(duration)}}</span>
      </div>
    </div>
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
  props: {
    info: Object
  },
  methods: {
    play() {
      clearInterval(this.timer);
      this.isplay = true;
      let video = this.$refs.video;
      video.play();

      this.timer = setInterval(() => {
        if (this.isplay) {
          this.currentTime = video.currentTime;
          this.duration = video.duration;
          this.progress = (video.currentTime / video.duration).toFixed(2);
        }
        if (video.ended) {
          clearInterval(this.timer);
          this.isplay = false;
        }
      }, 100);
    },
    full() {
      if (this.isopen) this.$refs.video.webkitRequestFullScreen();
    },
    music() {
      this.ismuted = !this.ismuted;
    },
    pause() {
      if (this.isplay) {
        this.$refs.video.pause();
        this.isplay = false;
      }
    },
    secondsFormat(s) {
      let str = "";
      let minute = Math.floor(s / 60);
      str += minute !== 0 ? minute : "0" + ":";
      let second = s - minute * 60;
      str += second > 9 ? second : "0" + second;
      return str;
    },
    open() {
      if (this.isplay) {
        this.isopen = !this.isopen;
      }
    }
  }
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

.video-fn {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 50px;
  background-image: linear-gradient(to bottom, rgba(60, 60, 61, 0), #282538);
}

.video-bar {
  height: 3px;
  position: absolute;
  left: 10px;
  right: 10px;
  top: 10px;
  background: rgba(255, 255, 255, 0.7);
}
.video-bar > span {
  width: 0;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  background-color: #14b9c8;
  display: block;
}

.card-video {
  width: 100%;
  height: 195px;
  position: relative;
  margin-bottom: 10px;
  border-radius: 3px;
}
.card-video > video {
  width: 100%;
  height: 100%;
  background: #000;
}
.card-video > i.iconfont {
  font-size: 24px;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 5px;
  box-sizing: border-box;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -70%);
  cursor: pointer;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 999px;
  color: #fff;
  z-index: 9;
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
.full-btn {
  position: absolute;
  right: 10px;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  bottom: 10px;
}
.music-btn {
  color: #fff;
  cursor: pointer;
  font-size: 20px;
}
.music-box {
  position: absolute;
  bottom: 8px;
  right: 40px;
  cursor: pointer;
}
.music-box.stop::after {
  content: "";
  width: 2px;
  height: 30px;
  display: block;
  background-color: #fff;
  position: absolute;
  top: 50%;
  margin-top: -15px;
  left: 50%;
  transform: rotate(-55deg);
}
.play-btn {
  position: absolute;
  bottom: 8px;
  left: 10px;
  font-size: 18px;
  color: #fff;
  cursor: pointer;
}
.pause-btn {
  position: absolute;
  bottom: 8px;
  left: 10px;
  font-size: 16px;
  color: #fff;
  cursor: pointer;
}
.video-time {
  color: #fff;
  cursor: pointer;
  position: absolute;
  bottom: 12px;
  left: 40px;
  font-size: 13px;
}
</style>