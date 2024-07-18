<template>
  <view class="content">
    <image class="logo" src="/static/logo.png"></image>
    <view>
      <text class="title">{{ title }}</text>
    </view>
    <Tabbar v-if="tabbars" :props="tabbars.tabbars" />
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
      title: "Hello",
      tabbars: null,
      json: null,
    };
  },
  async onLoad() {
    await this.$onLaunched;
    this.getTabbarsValue();
  },
  methods: {
    init() {},
    getTabbarsValue() {
      uni.getStorage({
        key: "storage_data",
        success: (res) => {
          this.tabbars = res.data.tabbars;
        },
      });
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
