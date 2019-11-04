<template>
  <div class="details">
    <Navbar />

    <Scroll class="main-content">
      <Crumb />

      <div class="details-head-box">
        <img src="http://pic.yupoo.com/jsmask/bcbb9cf7/529ba09e.png" alt />
        <div class="tips-box">
          <span>编辑推荐</span>
        </div>
        <h5 class="game-title">螺旋英雄谭</h5>
        <p>发行商:雷霆游戏</p>
        <p>开发商: LUNARA Games</p>
        <p class="gray">261072 人关注</p>
        <a class="download-btn">
          <i class="iconfont">&#xe63d;</i> 下载
        </a>
        <div class="like-box">
          <i class="iconfont">&#xe601;</i> 关注
        </div>
      </div>

      <ul class="nav-justified">
        <li class="active">详情</li>
        <li>
          评价
          <small>3258</small>
        </li>
        <li>
          社区
          <small>3121</small>
        </li>
      </ul>
      <div class="main-box">
        <Title title="开发者的话："></Title>

        <Word>
          <p>
            “Jiang jiang jiang~~~~~”现在宣布：《螺旋英雄谭》联动的《光明之响》&amp;《光明之刃》正式开启！快来看看您心仪的女神是否就在其中吧！
            <br />
            <br />本次联动SEGA旗下最知名的作品“光明系列” （シャイニング·シリーズ），不但是SEGA长青的IP作品，更是日本家喻户晓的人气作品。相信，国内不少忠实玩家对于日本著名画师Tony主笔下的历代人气角色记忆犹新如数家珍，这次《螺旋英雄谭》为了回馈各位冒险者长久以来的支持，将两作中最具人气总势6位女神角色闪亮登场，全新声优水树奈奈、早见沙织、斋藤千和倾情献声，更精心准备了全新的联动剧情、联动活动等精彩联动庆典玩法！
            <br />
            <br />在整整一个月中，您将与龙奏骑士和少女们一起在尘星大陆中朝夕相伴，一起展开一次全新的冒险！
            <br />
            <br />为了庆祝本次联动，《螺旋英雄谭》更是进行了2.0版本的大更新，全新游戏界面、全新玩法、全新战场等重装上阵！米娜桑~我们不见不散哟！
            <br />
            <br />【关注我们】
            <br />官方微博：螺旋英雄谭
            <br />微信公众号ID：helixsaga
            <br />官方网站：
            <a
              href="http://lx.leiting.com/"
              target="_blank"
              rel="nofollow"
            >http://lx.leiting.com/</a>
            <br />客服电话：0592-3011618
          </p>
        </Word>
      </div>

      <Footer />
    </Scroll>
  </div>
</template>

<script>
import Navbar from "components/Navbar";
import Crumb from "components/Crumb";
import Footer from "components/Footer";
import Scroll from "components/Scroll";
import Title from "./Title";
import Word from "./Word";

export default {
  data() {
    return {};
  },
  components: {
    Navbar,
    Crumb,
    Footer,
    Scroll,
    Title,
    Word
  },
  created() {},
  mounted() {
    console.log(this.$route);
  },
  methods: {}
};
</script>

<style scoped>
.nav-justified {
  background: #fff;
  height: 47px;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(221, 221, 221, 0.7);
}
.nav-justified > li {
  flex: 1;
  text-align: center;
  height: 47px;
  cursor: pointer;
  line-height: 47px;
  font-size: 16px;
  position: relative;
}
.nav-justified > li.active {
  color: #14b9c8;
}
.nav-justified > li.active::after {
  content: "";
  width: 32px;
  height: 3px;
  background: #14b9c8;
  position: absolute;
  left: 50%;
  margin-left: -16px;
  bottom: -1px;
}

.like-box {
  color: #14b9c8;
  font-size: 14px;
  position: absolute;
  top: 30px;
  right: 15px;
  cursor: pointer;
  vertical-align: middle;
}
.like-box i {
  margin-right: 5px;
}

.details-head-box p {
  font-size: 12px;
  color: #14b9c8;
  line-height: 20px;
}

.download-btn {
  border-color: #12a7b4;
  background: #12a7b4;
  color: #ffffff;
  width: 125px;
  height: 43px;
  line-height: 43px;
  text-align: center;
  font-size: 14px;
  border-radius: 3px;
  margin: 16px 8px 0 8px;
  display: inline-block;
  cursor: pointer;
}
.download-btn > i {
  font-size: 18px;
}

.details-head-box p.gray {
  color: #999;
  margin: 6px auto 0;
}

.tips-box {
  text-align: center;
  margin-top: 16px;
}
.tips-box span {
  padding: 3px 14px;
  background-color: #b4ebfa;
  border-radius: 15px;
  font-size: 12px;
  color: #14b9c8;
}

.game-title {
  line-height: 30px;
  max-height: 60px;
  vertical-align: top;
  font-size: 24px;
  overflow: hidden;
  max-width: 90%;
  margin: 20px auto 5px;
  font-weight: normal;
}

.main-content {
  position: absolute;
  top: 50px;
  left: 0;
  bottom: 0;
}
.details {
  background: #666;
  width: 100%;
  height: 100%;
  padding: 50px 0 0 0;
  box-sizing: border-box;
}
.details::before {
  content: "";
  position: absolute;
  top: 0px;
  left: 0;
  right: 0;
  bottom: 220px;
  background: #e6e6e6;
}
.details-head-box {
  background: #ffffff;
  box-sizing: border-box;
  padding: 30px 0 20px;
  border-bottom: 10px solid #f2f2f2;
  text-align: center;
  position: relative;
}
.details-head-box > img {
  width: 128px;
  height: 128px;
  object-fit: cover;
}
.main-box {
  background: #ffffff;
}
</style>