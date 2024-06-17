"use strict";
const common_vendor = require("../common/vendor.js");
const commoneUrl = "http://localhost:8000";
function getRequest(url, data) {
  var promise = new Promise((resolve, reject) => {
    var postData = data;
    common_vendor.index.request({
      url: commoneUrl + url,
      data: postData,
      method: "GET",
      dataType: "json",
      header: {
        "content-type": "application/json"
        // token: uni.getStorageSync("token") || "",
      },
      success: function(res) {
        if (res.statusCode === 200) {
          resolve(res.data);
        } else {
          resolve(res.data);
        }
      },
      error: function() {
        reject("网络出错");
      }
    });
  });
  return promise;
}
function postRequest(url, data) {
  var promise = new Promise((resolve, reject) => {
    var postData = data;
    common_vendor.index.request({
      url: commoneUrl + url,
      data: postData,
      method: "POST",
      header: {
        "content-type": "application/json",
        token: common_vendor.index.getStorageSync("token") || ""
      },
      success: function(res) {
        if (res.code === 200 && res.code == 0) {
          resolve(res.data);
        } else {
          resolve(res.data);
        }
      },
      error: function() {
        reject("网络出错");
      }
    });
  });
  return promise;
}
const Http = {
  postRequest,
  getRequest
};
exports.Http = Http;
