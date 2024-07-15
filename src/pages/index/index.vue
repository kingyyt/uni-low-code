<template>
  <view class="content">
    <image class="logo" src="/static/logo.png"></image>
    <view>
      <text class="title">{{ title }}</text>
      <van-button>123</van-button>
    </view>
    <!-- <van-tabbar :active="active" @change="aaa">
      <van-tabbar-item icon="home-o">标签</van-tabbar-item>
      <van-tabbar-item icon="search">标签</van-tabbar-item>
      <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
      <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
    </van-tabbar> -->
    <Tabbar
      @clickItem="clickItem"
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
import { GetJsonListDetail } from "@/api/index";
import Tabbar from "@/packages/tabbar/index";
export default {
  components: {
    Tabbar,
  },
  data() {
    return {
      title: "Hello",
      active: 0,
    };
  },
  methods: {
    init() {
      this.getData();
    },
    async getData() {
      const res = await GetJsonListDetail(81);
      console.log(res);
      uni.setStorage({
        key: "storage_json",
        data: JSON.parse(res.json),
      });
      this.cData();
    },
    cData() {
      uni.getStorage({
        key: "storage_json",
        success: function (res) {
          console.log(res.data);
        },
      });
    },
  },
  onLoad() {
    this.init();
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
