<template>
  <ul class="crumb">
    <li>
      <span>首页</span>
    </li>
    <li>
      <span>角色扮演</span>
    </li>
    <li>
      <span>螺旋英雄谭</span>
    </li>
  </ul>
</template>

<script>
export default {};
</script>

<style scoped>
.crumb {
  display: flex;
  height: 36px;
  border-bottom: 1px solid #e8e8e8;
  background: #e6e6e6;
}
.crumb > li {
  height: 36px;
  line-height: 36px;
  box-sizing: border-box;
  padding: 0 10px 0 30px;
  position: relative;
}
.crumb > li span {
  width: 100%;
  box-sizing: border-box;
  font-size: 12px;
  max-width: 110px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.crumb > li:first-of-type::before {
  content: "";
  width: 0;
  height: 0;
  border-width: 18px 15px;
  border-color: transparent transparent transparent #ffffff;
  border-style: solid;
  position: absolute;
  right: -30px;
  top: 0;
  z-index: 1;
}
.crumb > li:first-of-type {
  background: #ffffff;
  padding: 0 10px 0 15px;
}
.crumb > li:nth-of-type(2)::before {
  content: "";
  width: 0;
  height: 0;
  border-width: 18px 15px;
  border-color: transparent transparent transparent #f2f2f2;
  border-style: solid;
  position: absolute;
  right: -30px;
  top: 0;
  z-index: 1;
}
.crumb > li:nth-of-type(2) {
  background: #f2f2f2;
}
</style>