<template>
  <view class="content">
    <!-- <ButtonD
      :props="{
        defaultValue: '按钮文字',
        addonBefore: '按钮',
        placeholder: '请输入内容',
      }"
    /> -->
    <view v-for="(item, index) in dynamicComponent" :key="index">
      <component :is="item"></component>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref, defineAsyncComponent } from "vue";
// import ButtonD from "@/packages/basic/button/index.vue";
import { allLoadComponent } from "@/utils/getPackages/getComponent";
import { GetJsonListDetail } from "@/api/microMain/microMain";

let list = ref([]);

let dynamicComponent: any = [];
const getJsonList = async () => {
  const res = await GetJsonListDetail(1);
  if (res) {
    list.value = JSON.parse(res.json);
    dynamicComponent = allLoadComponent(list.value);
    console.log(dynamicComponent.value);
    console.log(dynamicComponent);
    dynamicComponent.forEach((element: any) => {
      console.log(12332);
      console.log(element, "123123");
    });
    // dynamicComponent = defineAsyncComponent(() => allLoadComponent(list.value));
  }
};
getJsonList();
</script>

<style></style>
