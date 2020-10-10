<template>
  <view class="container">
    <view class="content">
      <view class="header">
        <nav-bar/>
      </view>
      <view class="body">
        <view class="context fade-in">
          <scroll-view class="scroll-view" :scroll-y="isScroll">
            <view class="scroll-content">
              <tab-bar :tabIndex="tabIndex" @onChange="onHandleChange"/>
              <tab-content :tabIndex="tabIndex"/>
            </view>
          </scroll-view>
        </view>
      </view>
      <view class="footer"></view>
    </view>
  </view>
</template>

<script type="text/ecmascript-6">
  import Mixin from '../../mixins';
  import TabBar from "./components/tab-bar/tab-bar";
  import NavBar from "../../components/nav-bar/nav-bar";
  import TabContent from "./components/tab-content/tab-content";
  import * as $controller from './controller';

  export default {
    components: {
      NavBar,
      TabContent,
      TabBar
    },
    data() {
      return {
        tabIndex: 0,
        isScroll: true
      }
    },
    mixins: [Mixin],
    computed: $controller.states,
    methods: $controller.actions,
    onLoad() {
    }
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
          padding-top: calc(var(--status-bar-height) + unit(90, rpx));
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
