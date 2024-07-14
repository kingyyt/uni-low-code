export const tabbarToPage = (page) => {
  switch (page) {
    case "首页":
      return "/pages/index/index";
    case "分类页":
      return "/pages/index/tabbar1";
    default:
      return "/pages/index/index";
  }
};
