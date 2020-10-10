<template>
  <view class="container">
    <view class="content">
      <view class="header"></view>
      <view class="body">
        <error :isShow="isFailure" @refresh="onRefresh"/>
        <view class="context fade-in" v-if="isSuccess">
          <scroll-view class="scroll-view" :scroll-y="isScroll">
            <view class="scroll-content"></view>
          </scroll-view>
        </view>
      </view>
      <view class="footer"></view>
    </view>
  </view>
</template>

<script type="text/ecmascript-6">
  import Mixin from '../../mixins';
  import Error from "../../components/error/error";
  import * as $controller from './controller';

  export default {
    components: {
      Error
    },
    data() {
      return {
        isScroll: true
      }
    },
    mixins: [Mixin],
    computed: $controller.states,
    methods: $controller.actions,
    onLoad() {}
  }
</script>

<style lang="less">
  @import "../../assets/less/common";

  .container {
    min-height: 100vh;
    .content {
      height: 100vh;
      .header {
      }
      .body {
        height: 100%;
        position: relative;
        .context {
          height: 100%;
          .scroll-view {
            height: 100%;
            .scroll-content {

            }
          }
        }
      }
      .footer {
      }
    }
  }
</style>
