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
console.log(ButtonD);
console.log(ButtonD);
console.log(ButtonD);
console.log(ButtonD);
console.log(ButtonD);

const title = ref("Hello");
</script>

<style></style>
