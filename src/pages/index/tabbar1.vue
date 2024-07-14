<template>
  <view class="content">
    123123
    <Tabbar
      :props="{
        active: 0,
        tabbars: [
          {
            icon: 'wap-home-o ',
            name: '首页',
            pageName: '测试页面4',
            select: 81,
          },
          {
            icon: 'list-switch ',
            name: '分类页',
            pageName: '分类页',
            select: 75,
          },
          {
            icon: 'logistics ',
            name: '购物车',
            pageName: '购物车页',
            select: 76,
          },
          {
            icon: 'friends-o ',
            name: '我的',
            pageName: '个人中心',
            select: 77,
          },
        ],
      }"
    />
  </view>
</template>

<script>
import Tabbar from "@/packages/tabbar/index";
export default {
  components: {
    Tabbar,
  },
  data() {
    return {
      active: 0,
    };
  },
};
</script>

<style></style>
