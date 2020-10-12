<template>
  <view class="module">
    <view class="module-content">
      <view class="module-header"></view>
      <view class="module-body">
        <view class="module-house">
          <house-item/>
          <house-item/>
          <house-item/>
          <house-item/>
          <house-item/>
        </view>
      </view>
      <view class="module-footer"></view>
    </view>
  </view>
</template>

<script type="text/ecmascript-6">
  import LazyImage from "../../../../../../components/lazy-image/lazy-image";
  import * as $config from '../../../../../../config';
  import HouseItem from "../../../../../../components/house-item/house-item";

  export default {
    components: {
      HouseItem,
      LazyImage
    },
    name: "house",
    data() {
      return {
        items: $config.BANNER
      }
    },
    props: {},
    methods: {},
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
          .swiper {
            height: 100%;
            .swiper-item {
              width: 100%;
              height: 100%;
            }
          }
        }
      }
      .module-footer {
      }
    }
  }
</style>