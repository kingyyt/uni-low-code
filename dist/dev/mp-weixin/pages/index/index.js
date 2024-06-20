"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_getPackages_getComponent = require("../../utils/getPackages/getComponent.js");
const api_microMain_microMain = require("../../api/microMain/microMain.js");
require("../../http/httpRequest.js");
if (!Array) {
  const _component_van_button = common_vendor.resolveComponent("van-button");
  _component_van_button();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    let list = common_vendor.ref([]);
    let dynamicComponent = common_vendor.ref([]);
    const getJsonList = async () => {
      const res = await api_microMain_microMain.GetJsonListDetail(1);
      if (res) {
        console.log(res);
        list.value = JSON.parse(res.json);
        dynamicComponent.value = await utils_getPackages_getComponent.allLoadComponent(list.value);
        console.log(dynamicComponent.value);
      }
    };
    common_vendor.onMounted(() => {
      getJsonList();
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          type: "danger"
        }),
        b: common_vendor.f(common_vendor.unref(dynamicComponent), (item, index, i0) => {
          return {
            a: index
          };
        })
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/edric/Documents/code/git/uni-low-code/src/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
