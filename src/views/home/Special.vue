<template>
  <div class="special-item">
    <p>来自专题</p>
    <div class="spec-warp" v-if="pic.length===1">
      <div :style="{'background-color': $color()}">
        <Lazy :src="pic[0]" />
      </div>
    </div>
    <div class="spec-box" v-if="pic.length>1">
      <div
        class="app-item"
        v-for="(item,index) in pic"
        :key="index"
        :style="{'background-color': $color()}"
      >
        <Lazy :src="item" />
      </div>
    </div>
    <h5>{{title}}</h5>
  </div>
</template>

<script>
export default {
  props: {
    pic: Array,
    title: String
  }
};
</script>

<style scoped>
.special-item {
  padding: 15px;
  width: 100%;
  box-sizing: border-box;
  border-bottom: 1px solid #f1f1f1;
  background: #fff;
}
.special-item > p {
  font-size: 13px;
  padding: 0;
  color: #999;
  line-height: 1;
}
.special-item > .spec-warp {
  margin: 12px auto;
  width: 100%;
  position: relative;
  height: 138px;
  overflow: hidden;
  border-radius: 5px;
}
.special-item > .spec-warp img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.special-item > h5 {
  font-size: 16px;
  line-height: 28px;
  color: #333;
  font-weight: 700;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 100%;
}

.spec-box {
  margin: 12px auto;
  height: 140px;
  position: relative;
  overflow: hidden;
}

.spec-box .app-item {
  border-radius: 22.78%;
  outline: transparent solid 1px;
  width: 135px;
  height: 135px;
  position: relative;
}

.spec-box .app-item img {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}

.spec-box .app-item:nth-of-type(1) {
  left: 50%;
  top: 50%;
  transform: translate3d(-50%, -50%, 0) rotate(30deg);
}

.spec-box .app-item:nth-of-type(2) {
  left: 50%;
  top: 50%;
  transform: translate3d(-135%, -204%, 0) scale(0.66) rotate(30deg);
}

.spec-box .app-item:nth-of-type(3) {
  left: 50%;
  top: 50%;
  transform: translate3d(0%, -318%, 0) scale(0.46) rotate(30deg);
}

.spec-box .app-item:nth-of-type(4) {
  left: 50%;
  top: 50%;
  transform: translate3d(62%, -389%, 0) scale(0.66) rotate(30deg);
}

.spec-box .app-item:nth-of-type(5) {
  left: 50%;
  top: 50%;
  transform: translate3d(-168%, -422%, 0) scale(0.72) rotate(30deg);
}

.spec-box .app-item:nth-of-type(6) {
  left: 50%;
  top: 50%;
  transform: translate3d(38%, -512%, 0) scale(0.66) rotate(30deg);
}

.spec-box .app-item:nth-of-type(7) {
  left: 50%;
  top: 50%;
  transform: translate3d(-102%, -572%, 0) scale(0.66) rotate(30deg);
}
</style>