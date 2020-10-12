<template>
  <view class="module">
    <view class="module-content">
      <view class="module-header"></view>
      <view class="module-body">
        <view class="module-swiper">
          <swiper class="swiper" :current="current" :autoplay="true" :circular="true" @change="onHandleChange">
            <swiper-item class="swiper-item" v-for="(item,index) in items" :key="index">
              <lazy-image class="swiper-img" :src="item" width="30%"/>
            </swiper-item>
          </swiper>
          <view class="dots">
            <view class="dot" :class="{'active':current===index}"
                  v-for="(item,index) in items" :item="item" :key="index"></view>
          </view>
        </view>
      </view>
      <view class="module-footer"></view>
    </view>
  </view>
</template>

<script type="text/ecmascript-6">
  import LazyImage from "../../../../../../components/lazy-image/lazy-image";
  import * as $config from '../../../../../../config';

  export default {
    components: {
      LazyImage
    },
    name: "banner",
    data() {
      return {
        current: 0,
        items: $config.BANNER
      }
    },
    props: {},
    methods: {
      onHandleChange(e) {
        const {current} = e.detail;
        this.current = current;
      }
    },
    created() {
    }
  }
</script>

<style lang="less">
  @import "../../../../../../assets/less/common";

  .module {
    margin: 0 !important;
    .module-content {
      .module-header {
      }
      .module-body {
        .module-swiper {
          height: unit(280, rpx);
          position: relative;
          .swiper {
            height: 100%;
            .swiper-item {
              width: 100%;
              height: 100%;
            }
          }
          .dots {
            width: 100%;
            position: absolute;
            left: 0;
            bottom: unit(20, rpx);
            text-align: center;
            font-size: 0;
            .dot {
              width: 20px;
              height: 3px;
              margin-right: 6px;
              display: inline-block;
              vertical-align: middle;
              background-color: @white;
              transition: all 300ms ease-out;
              &:last-child {
                margin: 0;
              }
              &.active {
                background-color: @theme;
              }
            }
          }
        }
      }
      .module-footer {
      }
    }
  }
</style>