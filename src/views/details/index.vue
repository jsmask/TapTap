<template>
  <div class="details">
    <Navbar />

    <Scroll class="main-content" ref="scroll">
      <Crumb>
        <span slot="0" @click.stop="toPath(0)">首页</span>
        <span slot="1" @click.stop="toPath(1)">角色扮演</span>
        <span slot="2">螺旋英雄谭</span>
      </Crumb>

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
        <Title title="开发者的话：" style="padding-bottom:0"></Title>

        <Word :open="false" :height="220" :complete="wordComplete">
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

      <div class="copy-box">
        <Copy content="711384703">官方交流群: 711384703</Copy>
      </div>

      <div class="sk-box">
        <Title title="宣传视频/截图" size="small" style="padding:0"></Title>
        <p class="sk-title">
          <span>全部 28</span>
        </p>
        <Infeed class="infeed-box" ref="infeed1">
          <li>
            <Media
              class="media-box"
              src="https://www.runoob.com/try/demo_source/movie.mp4"
              poster="http://pic.yupoo.com/jsmask/cb069193/7deaac65.jpg"
            />
          </li>
          <li :style="{'background-color':$color()}" @click.stop="priviewImg">
            <Lazy src="http://pic.yupoo.com/jsmask/11e288c8/013a0c94.jpg" />
          </li>
          <li :style="{'background-color':$color()}" @click.stop="priviewImg">
            <Lazy src="http://pic.yupoo.com/jsmask/7f91b604/1213be6f.jpg" />
          </li>
          <li :style="{'background-color':$color()}" @click.stop="priviewImg">
            <Lazy src="http://pic.yupoo.com/jsmask/fd8c675a/6cc186b9.jpg" />
          </li>
        </Infeed>
      </div>

      <div class="sk-box">
        <Title title="视频" size="small" style="padding:0"></Title>
        <p class="sk-title">
          <span>全部 40</span> |
          <span>官方 12</span> |
          <span>玩家 28</span>
        </p>
        <Infeed class="infeed-box" style="height:223px;" ref="infeed2">
          <li>
            <Media
              class="media-box"
              src="https://www.runoob.com/try/demo_source/movie.mp4"
              poster="http://pic.yupoo.com/jsmask/cb069193/7deaac65.jpg"
            />
            <div class="feed-video-ct">
              <h5>集结！光明赞歌！《螺旋英雄谭》联动《光明系列》PV正式公开啦！</h5>
              <p>
                <span>4 天前</span>
                <span>2597 播放</span>
              </p>
            </div>
          </li>
          <li>
            <Media
              class="media-box"
              src="https://www.runoob.com/try/demo_source/movie.mp4"
              poster="http://pic.yupoo.com/jsmask/cb069193/7deaac65.jpg"
            />
            <div class="feed-video-ct">
              <h5>萌萌的战旗游戏，凑齐5个UR养成最强战队。逍遥吴彦祖带新手一起来肝而不氪</h5>
              <p>
                <span>昨天</span>
                <span>2903 播放</span>
              </p>
            </div>
          </li>
          <li>
            <Media
              class="media-box"
              src="https://www.runoob.com/try/demo_source/movie.mp4"
              poster="http://pic.yupoo.com/jsmask/cb069193/7deaac65.jpg"
            />
            <div class="feed-video-ct">
              <h5>背锅侠出究极稀有英雄你们抽到了吗？</h5>
              <p>
                <span>昨天</span>
                <span>811 播放</span>
              </p>
            </div>
          </li>
        </Infeed>
      </div>

      <ul class="sk-should-box">
        <li>
          <span>中</span>简体中文
        </li>
        <li>
          <span>
            <i class="iconfont">&#xe602;</i>
          </span>需要网络
        </li>
      </ul>

      <div class="sk-info-box">
        <Title title="简介" style="padding-bottom:0"></Title>

        <Word :open="false" :height="120" :complete="wordComplete">
          <p>
            本次《螺旋英雄谭》联动，汇聚了SEGA“光明系列”两大经典之作《光明之响龙奏回音》&amp;《光明之刃》中的人气角色，由日本著名画师Tony亲绘的龙奏骑士歌之巫女将现身尘星大陆！雾香、咲夜、爱克雪拉、小梅等也将限时登场，助阵冒险者们铸就全新传说。
            <br class="bbcode-paragraph-br" />
            <br class="bbcode-paragraph-br" />【游戏特色】
            <br />1、光明系列联动——全新剧情、战役、秘境开启
            <br />大师级画师Tony代表作《光明系列》联动开启！来自《光明之刃》、《光明之响》的少女们将进入尘星大陆，新的冒险物语开始。
            <br />全新的冒险章节、战役篇章、联动秘境渐次开启。这一次，凡瑟尔治安小队面对的将不仅是阴谋与动乱，还有交错时空带来的未知。
            <br class="bbcode-paragraph-br" />
            <br class="bbcode-paragraph-br" />2、联动角色限时登场——传奇画师
            <br />汇聚“光明系列”两大历代经典之作《光明之刃》与《光明之响》中的人气角色，龙奏骑士歌之巫女现身尘星大陆，日本著名画师Tony主笔精美立绘+特别联动专属Q萌战斗小人，带来别具一格的战棋乐趣！
            <br class="bbcode-paragraph-br" />
            <br class="bbcode-paragraph-br" />3、全新女神声优加盟——水树奈奈、早见沙织倾情献声
            <br />水树奈奈、早见沙织、茅野爱衣、斋藤千和、田村由香里，日本顶级声优天团阵容，就在这个金秋女神回归！
            <br class="bbcode-paragraph-br" />
            <br class="bbcode-paragraph-br" />4、新生2.0版本——全界面重置，风格超进化
            <br />字体背景纹样风格调整，整体高度统一为符合世界观背景下主城凡瑟尔的洛可可风，华丽纤细适合掌中盈盈一握。
            <br />主色调更加明亮通透，不同战斗场景底色大幅度更换，战场走位愈发鲜明，角色大招演绎更具魄力。
          </p>
        </Word>
      </div>

      <div class="sk-info-box">
        <Title title="该游戏热门标签" style="padding-bottom:0">
          <span style="color:#14B9C8;">更多</span>
        </Title>

        <ul class="tips-box2">
          <li v-for="(item,index) in tipsList" :key="index">{{item.name}}</li>
        </ul>

        <Title title="最近更新" style="padding-bottom:0"></Title>

        <Word :open="false" :height="220" :complete="wordComplete">
          <p>
            【联动】增加SEGA光明系列联动角色（雾香、琳娜、爱克雪拉、咲夜、林小梅、蜜丝缇）
            <br />【联动】增加联动角色圣物
            <br />【联动】更换游戏ICON
            <br />【新功能】UI界面替换，更新到2.0
            <br />【新功能】增加7日新手历练
            <br />【新功能】增加螺旋之力进阶功能
            <br />【新功能】增加公会战积分功能
            <br />【调整】增加金币试炼，经验试炼，素材试炼扫荡功能，达到等级可直接扫荡
            <br />【调整】功能开启等级调整
            <br />★委托任务开启等级调整为36级
            <br />★螺旋尖塔和螺旋之力开启等级调整为26级
            <br />★研究功能调整为28级
            <br />【调整】战斗中状态增加层数和数值显示
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
import Infeed from "components/Infeed";
import Media from "components/Media";
import Title from "./Title";
import Word from "./Word";
import Copy from "./Copy";

export default {
  data() {
    return {
      tipsList: [
        { name: "战棋" },
        { name: "卡牌" },
        { name: "ACG" },
        { name: "二次元" },
        { name: "SRPG" },
        { name: "日系" },
        { name: "角色扮演" },
        { name: "美少女" }
      ]
    };
  },
  components: {
    Navbar,
    Crumb,
    Footer,
    Scroll,
    Title,
    Word,
    Copy,
    Infeed,
    Media
  },
  created() {},
  mounted() {
    console.log(this.$route, this.$router);
    this.$nextTick(() => {
      this.$refs.scroll.refresh();
    });
  },
  methods: {
    toPath(path) {
      if (path === 0) {
        if (this.$route.query.source === 0) {
          this.$router.history.go(-1);
        }else{
          this.$router.history.replace("/");
        }
      }
    },
    wordComplete() {
      this.$refs.scroll.refresh();
    },
    priviewImg(e) {
      this.$preview(e.target.src);
    }
  }
};
</script>

<style scoped>
.tips-box2 {
  margin: 15px;
  display: flex;
  flex-wrap: wrap;
}

.tips-box2 > li {
  padding: 4px 12px;
  font-size: 14px;
  line-height: 21px;
  margin: 5px 10px 8px 0;
  display: block;
  padding: 4px 10px;
  border: 1px solid #14b9c8;
  border-radius: 4px;
  text-decoration: none;
  font-size: 14px;
  color: #14b9c8;
}

.sk-info-box {
  background: #fff;
  border-bottom: 1px solid #f2f2f2;
}
.sk-should-box {
  background: #fff;
  height: 50px;
  border-bottom: 1px solid #f2f2f2;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 0 15px;
}

.sk-should-box > li {
  flex: 1;
  display: flex;
  align-items: center;
}
.sk-should-box > li > span {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-color: #14b9c8;
  display: block;
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
}

.feed-video-ct {
  width: 269px;
  box-sizing: border-box;
  padding: 5px 5px 0 5px;
}
.feed-video-ct > h5 {
  color: #333;
  font-weight: normal;
  font-size: 14px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 100%;
}
.feed-video-ct > p {
  margin-top: 3px;
}
.feed-video-ct > p > span {
  color: #999;
  font-size: 12px;
  margin-right: 10px;
}
.media-box {
  width: 269px;
  height: 167px;
}

.infeed-box {
  height: 167px;
  margin-top: 10px;
  width: auto;
  white-space: nowrap;
}
.infeed-box li {
  height: 100%;
  display: inline-block;
  position: relative;
  white-space: nowrap;
}
.infeed-box li > img {
  width: auto;
  height: 167px;
}
.infeed-box li:not(:last-of-type) {
  margin-right: 10px;
}

.copy-box {
  border-top: 1px solid #f2f2f2;
  border-bottom: 1px solid #f2f2f2;
  background-color: #fff;
}
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
.sk-title {
  font-size: 12px;
  color: #999;
  box-sizing: border-box;
  margin-top: 10px;
}
.sk-title > span {
  color: #14b9c8;
  cursor: pointer;
}
.sk-box {
  background: #ffffff;
  border-bottom: 1px solid #f2f2f2;
  padding: 15px;
}
</style>