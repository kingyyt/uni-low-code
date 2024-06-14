<script lang="ts">
export default {
  name: "按钮",
  id: "button",
};
</script>
<script setup lang="ts">
const props = defineProps<{
  props: any;
}>();
</script>

<template>
  <div>
    <van-button type="danger">{{ props.props?.defaultValue }}</van-button>
  </div>
</template>
