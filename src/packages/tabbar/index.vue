<script lang="js">
import { tabbarToPage } from "@/utils/toPage"
export default {
  //   name: "tabbar",
  props: {
    props: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      active: 0,
    };
  },
    watch: {
      props: {
        handler() {
          this.active = this.props.active;
        },
        deep: true,
      },
    },
  methods: {
    onChange(e) {
      this.active = e.detail;
      console.log(tabbarToPage(this.props.tabbars[e.detail].name))
      uni.redirectTo({url:tabbarToPage(this.props.tabbars[e.detail].name)})
    //   this.$emit("clickItem", this.active);
    },
  },
};
</script>

<template>
  <div>
    <van-tabbar :active="active" @change="onChange">
      <van-tabbar-item
        v-for="(item, index) in props.tabbars"
        :key="index"
        :icon="item.icon"
      >
        {{ item.name }}
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>
