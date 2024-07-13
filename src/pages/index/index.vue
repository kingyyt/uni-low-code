<template>
  <view class="content">
    <image class="logo" src="/static/logo.png"></image>
    <view>
      <text @click="aaa" class="title">{{ title }}</text>
      <van-button>123</van-button>
    </view>
    <van-tabbar :active="active" @change="aaa">
      <van-tabbar-item icon="home-o">标签</van-tabbar-item>
      <van-tabbar-item icon="search">标签</van-tabbar-item>
      <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
      <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
    </van-tabbar>
  </view>
</template>

<script>
import { GetJsonListDetail } from "@/api/index";
export default {
  data() {
    return {
      title: "Hello",
      active: 0,
    };
  },
  onLoad() {
    this.init();
  },
  methods: {
    async init() {
      const res = await GetJsonListDetail(1);
      console.log(res);
    },
    aaa(event) {
      console.log(123123);
      // event.detail 的值为当前选中项的索引
      this.active = event.detail;
    },
  },
};
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin: 200rpx auto 50rpx auto;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
