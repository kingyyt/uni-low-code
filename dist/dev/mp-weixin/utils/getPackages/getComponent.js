"use strict";
const common_vendor = require("../../common/vendor.js");
const loadComponent = async (com) => {
  try {
    const component = await `/src/packages/basic/${com}/index.vue`;
    return component.default;
  } catch (error) {
    console.error("Failed to load component:", error);
    return null;
  }
};
const allLoadComponent = async (data) => {
  Promise.all(
    data.map(async (item) => {
      const component = await loadComponent(item.id.split("-")[0]);
      item.comName = common_vendor.shallowRef(component);
    })
  );
  return data;
};
exports.allLoadComponent = allLoadComponent;
