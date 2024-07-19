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
      tabbars: null,
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
