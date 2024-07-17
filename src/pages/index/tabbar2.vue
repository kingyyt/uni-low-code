<template>
  <view class="content">
    3333
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
        key: "storage_tabbars",
        success: (res) => {
          this.tabbars = res.data;
        },
      });
    },

    getJsonValue() {
      uni.getStorage({
        key: "storage_json",
        success: (res) => {
          this.json = res.data;
        },
      });
    },
  },
};
</script>
