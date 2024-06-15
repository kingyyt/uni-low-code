import axios from "axios";

const service = axios.create({
  baseURL: "http://localhost:8000",
  timeout: 5000,
});

service.interceptors.request.use(
  (config) => {
    config.data = JSON.stringify(config.params);
    // if (store.token) {
    //   config.headers["Authorization"] = store.token;
    // }
    config.headers["Content-Type"] = "application/json";
    return config;
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  (response) => {
    if (response.status == 200) {
      return response.data;
    }
    console.log("请求地址错误");
    return;
  },
  (error) => {
    if (error.code == "ERR_NETWORK") {
      console.log("请求地址错误");
      return;
    }
    switch (error.response.status) {
      case 404:
        console.log("请求地址错误");
        return;
      case 500:
        console.log("服务器错误");
        return;
      default:
        console.log("服务器错误");
        break;
    }
    return Promise.reject(error);
  }
);

export default service;
