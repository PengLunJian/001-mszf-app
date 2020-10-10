<template>
  <view class="nav-bar">
    <view class="status-bar"></view>
    <view class="title-bar">码上找房</view>
  </view>
</template>

<script type="text/ecmascript-6">

  export default {
    name: "nav-bar",
    data() {
      return {}
    },
    props: {},
    methods: {},
    created() {
    }
  }
</script>

<style lang="less">
  @import "../../assets/less/common";

  .nav-bar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    .status-bar {
      width: 100%;
      height: var(--status-bar-height);
      background-color: @white;
    }
    .title-bar {
      height: unit(90, rpx);
      line-height: unit(90, rpx);
      background-color: @white;
      font-size: @fontSize32;
      font-weight: bold;
      text-align: center;
    }
  }
</style>