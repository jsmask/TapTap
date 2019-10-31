<template>
  <div class="card-video" @click.stop="open">
    <video :src="src" ref="video" :muted="ismuted" controlslist="nodownload"></video>
    <div class="video-poster" v-show="pic" :style="{'background-color':$color()}">
      <Lazy :src="poster" />
    </div>
    <i class="iconfont" @click.stop="play" v-show="!isplay">&#xe60a;</i>
    <div class="video-fn" v-show="isopen">
      <p class="video-bar" @click.stop="change" ref="bar">
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
      isopen: false,
      pic: true
    };
  },
  props: {
    src: String,
    poster: String
  },
  methods: {
    play() {
      clearInterval(this.timer);
      this.isplay = true;
      this.pic = false;
      let video = this.$refs.video;
      video.disablePictureInPicture = true;
      video.play();
      this.timer = setInterval(() => {
        this.ismuted = video.muted;
        if(video.paused){
            this.isplay = false;
            clearInterval(this.timer);
        }
        if (this.isplay) {
          this.currentTime = ~~video.currentTime;
          this.duration = ~~video.duration;
          this.progress = (video.currentTime / video.duration).toFixed(2);
        }
        if (video.ended) {
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
    change(e) {
      let len = e.layerX;
      let width = this.$refs.bar.clientWidth;
      let video = this.$refs.video;
      video.currentTime = (len / width) * video.duration;
      this.currentTime = ~~video.currentTime;
      this.duration = ~~video.duration;
      this.progress = (video.currentTime / video.duration).toFixed(2);
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
.video-poster {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
}
.video-poster img {
  width: 100%;
  height: 100%;
  object-fit: cover;
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

.video-bar > span::after {
  content: "";
  width: 8px;
  position: absolute;
  height: 8px;
  border-radius: 100%;
  background-color: #14b9c8;
  right: 0;
  top: 50%;
  margin-top: -4px;
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

.full-btn {
  position: absolute;
  right: 10px;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  bottom: 9px;
}
.music-btn {
  color: #fff;
  cursor: pointer;
  font-size: 18px;
}
.music-box {
  position: absolute;
  bottom: 9px;
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
  bottom: 10px;
  left: 40px;
  font-size: 13px;
}
</style>