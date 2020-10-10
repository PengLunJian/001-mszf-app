<template>
  <view class="container">
    <view class="content">
      <view class="header">
        <nav-bar/>
      </view>
      <view class="body">
        <empty :isShow="isSuccess&&!isData"/>
        <error :isShow="isFailure" @refresh="onRefresh"/>
        <view class="context fade-in" v-if="isSuccess&&isData">
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
  import Empty from "../../components/empty/empty";
  import NavBar from "../../components/nav-bar/nav-bar";
  import * as $controller from './controller';

  export default {
    components: {
      NavBar,
      Empty,
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
    min-height: 100%;
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
              padding-bottom: unit(20, rpx);
              .module {
                .module-content {
                  .module-header {
                    .module-title {
                      width: 100%;
                      height: unit(80, rpx);
                      line-height: unit(80, rpx);
                      padding: 0 unit(30, rpx);
                      font-size: @fontSize24;
                      color: @fontColor2;
                    }
                  }
                }
              }
            }
          }
        }
      }
      .footer {
      }
    }
  }
</style>
