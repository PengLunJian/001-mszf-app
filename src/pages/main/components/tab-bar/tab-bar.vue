<template>
  <view class="tab-bar">
    <view class="tab-row row">
      <view class="tab-col col-4" :class="{' active':tabIndex===index}" v-for="(item,index) in items" :key="index"
            @click="onHandleChange(index)">
        <view class="tab-icon"></view>
        <view class="tab-text">{{item}}</view>
      </view>
    </view>
  </view>
</template>

<script type="text/ecmascript-6">
  export default {
    name: "tab-bar",
    data() {
      return {
        items: ['首页', '消息', '我的']
      }
    },
    props: {
      tabIndex: {
        type: Number,
        default: 0
      }
    },
    methods: {
      onHandleChange(index) {
        this.$emit('onChange', index);
      }
    },
    created() {
    }
  }
</script>

<style lang="less">
  @import "../../../../assets/less/common";

  .tab-bar {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: auto;
    z-index: 1000;
    box-shadow: 0 0 15px @boxShadow05;
    background-color: @white;
    font-size: @fontSize24;
    text-align: center;
    color: @fontColor3;
    .tab-row {
      .tab-col {
        padding: unit(10, rpx) 0;
        .tab-icon {
          height: unit(60, rpx);
          line-height: unit(60, rpx);
          background-size: auto 90%;
          background-repeat: no-repeat;
          background-position: center center;
        }
        .tab-text {
          height: unit(30, rpx);
          line-height: unit(30, rpx);
        }
        &:nth-child(1) {
          .tab-icon {
            background-image: url("../../images/tab-item01.png");
          }
        }
        &:nth-child(2) {
          .tab-icon {
            background-image: url("../../images/tab-item02.png");
          }
        }
        &:nth-child(3) {
          .tab-icon {
            background-image: url("../../images/tab-item03.png");
          }
        }
        &.active {
          color: @theme;
          &:nth-child(1) {
            .tab-icon {
              background-image: url("../../images/tab-item01-active.png");
            }
          }
          &:nth-child(2) {
            .tab-icon {
              background-image: url("../../images/tab-item02-active.png");
            }
          }
          &:nth-child(3) {
            .tab-icon {
              background-image: url("../../images/tab-item03-active.png");
            }
          }
        }
      }
    }
  }
</style>