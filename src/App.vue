<script>
import { GetJsonListDetail } from "@/api/index";
export default {
  onLaunch: function () {
    this.init();
    this.getData();
  },
  methods: {
    init() {
      uni.removeStorage({
        key: "storage_json",
      });
      uni.removeStorage({
        key: "storage_tabbars",
      });
    },
    async getData() {
      const res = await GetJsonListDetail(81);
      uni.setStorage({
        key: "storage_json",
        data: JSON.parse(res.json),
        success: function () {
          console.log("json");
        },
      });
      uni.setStorage({
        key: "storage_tabbars",
        data: JSON.parse(res.tabbars),
        success: function () {
          console.log("tabbars");
        },
      });
    },
  },
};
</script>

<style>
/*每个页面公共css */
@import "@/wxcomponents/vant-weapp/common/index.wxss";

.van-tabbar {
  position: fixed;
  bottom: 0;
}
</style>
