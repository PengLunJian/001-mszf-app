<template>
  <view class="nav-bar">
    <view class="nav-bar-sb"></view>
    <view class="nav-bar-tb">
      <view class="nav-btns">
        <view class="nav-btn iconfont icon-back"></view>
        <view class="nav-btn iconfont icon-home"></view>
      </view>
      <view class="nav-title">码上找房</view>
    </view>
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
    background-color: @white;
    .nav-bar-sb {
      width: 100%;
      height: var(--status-bar-height);
    }
    .nav-bar-tb {
      position: relative;
      height: unit(90, rpx);
      line-height: unit(90, rpx);
      text-align: center;
      .nav-btns {
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        .nav-btn {
          width: unit(90, rpx);
          font-size: @fontSize40;
        }
      }
      .nav-title {
        font-size: @fontSize32;
        font-weight: bold;
      }
    }
  }
</style>