import { h, ref } from "vue";

// 控制的组件数据
function componentsProps() {
  return ref({
    defaultValue: "按钮",
    addonBefore: "按钮文字",
    placeholder: "请输入内容",
  });
}

export const editorPropsData = componentsProps;
