<template>
  <view class="content">
    <image class="logo" src="/static/logo.png"></image>
    <view>
      <text class="title">{{ title }}</text>
    </view>
    <Tabbar v-if="tabbars" @clickItem="clickItem" :props="tabbars.tabbars" />
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
    };
  },
  onLoad() {
    this.getTabbarsValue();
  },
  watch: {
    tabbars(newVal, oldVal) {
      // 当 storageData 变化时，会触发这个函数
      console.log("storageData changed:", newVal);
    },
    deep: true,
  },
  methods: {
    init() {},
    getTabbarsValue() {
      uni.getStorage({
        key: "storage_tabbars",
        success: (res) => {
          this.tabbars = res.data;
        },
      });
    },
    cData() {
      const json = uni.getStorage({
        key: "storage_json",
        success: function (res) {
          console.log(res.data);
        },
      });
      uni.getStorage({
        key: "storage_tabbars",
        success: function (res) {
          this.tabbars = res.data;
          console.log(this.tabbars, "-----");
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
