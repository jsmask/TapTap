<template>
  <div class="footer">
    <h6>Contact Us</h6>

    <ul class="cu-type-box">
      <li style="background-color: #2d4485;">
        <a>
          <i class="iconfont">&#xe77a;</i>
        </a>
      </li>
      <li style="background-color: #54be36;">
        <a>
          <i class="iconfont">&#xe63f;</i>
        </a>
      </li>
      <li style="background-color: #2c5c8f;">
        <a>
          <i class="iconfont">&#xe630;</i>
        </a>
      </li>
      <li style="background-color: #0f7dfd;">
        <a>
          <i class="iconfont">&#xe69a;</i>
        </a>
      </li>
      <li style="background-color: #ff0014;">
        <a>
          <i class="iconfont">&#xe7e4;</i>
        </a>
      </li>
      <li style="background-color: #1998a5;">
        <a>
          <i class="iconfont">&#xe713;</i>
        </a>
      </li>
    </ul>

    <div class="events-link">
      <span>
        <a>TapTap 三周年</a>
      </span>
      <span>
        <a>篝火计划</a>
      </span>
      <span>
        <a>涂鸦大赛</a>
      </span>
      <span>
        <a>2018年度游戏大赏</a>
      </span>
    </div>

    <img class="f-logo" src="~assets/logo.png" alt="taptap" />

    <h6>中文（简体）</h6>

    <div class="events-link">
      <span>
        <a>开发者中心</a>
      </span>
      <span>
        <a>广告投放</a>
      </span>
      <span>
        <a>关于我们</a>
      </span>
      <span>
        <a>加入我们</a>
      </span>
      <span>
        <a>用户认证</a>
      </span>
    </div>

    <h5>Discover Superb Games.</h5>

    <p class="cp-i-p">
      Copyright © 2019
      <a>TapTap</a>. All rights Reserved.
    </p>
    <p class="cp-i-p">适龄提示: 本公司产品适合 10 周岁以上玩家使用</p>
  </div>
</template>

<script>
export default {
    
};
</script>

<style scoped>
.footer {
  padding: 30px 0;
  background: #666;
  height: auto;
  box-sizing: border-box;
  text-align: center;
}
.footer > h6 {
  margin: 0 0 16px 0;
  padding: 0;
  text-align: center;
  font-size: 12px;
  color: #999;
  font-weight: normal;
  box-sizing: border-box;
}

.footer > h5 {
  margin: 0 0 16px 0;
  line-height: 30px;
  font-family: Arial;
  font-size: 24px;
  color: #999;
}

.cu-type-box,
.events-link {
  display: flex;
  justify-content: center;
  position: relative;
  margin-bottom: 24px;
}

.events-link > span {
  margin: 0 5px;
}

.events-link a {
  color: #999;
  font-size: 12px;
}

.cu-type-box > li {
  margin: 0 5px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.cu-type-box > li i {
  color: #fff;
  font-size: 24px;
}

.f-logo {
  margin: 0 auto 10px;
  width: 110px;
}

.cp-i-p {
  font-size: 12px;
  color: #838383;
  line-height: 20px;
}
</style>