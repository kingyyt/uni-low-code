<template>
  <view class="content">
    <ButtonD
      :props="{
        defaultValue: '按钮文字',
        addonBefore: '按钮',
        placeholder: '请输入内容',
      }"
    />
  </view>
</template>

<script setup lang="ts">
import { ref } from "vue";
import ButtonD from "@/packages/basic/button/index.vue";

import { GetJsonListDetail } from "@/api/microMain/microMain";

let list = ref([]);
const getJsonList = async () => {
  const res = await GetJsonListDetail(1);
  console.log(res);
  if (res) {
    console.log(JSON.parse(res.json));
  }
};
getJsonList();
</script>

<style></style>
