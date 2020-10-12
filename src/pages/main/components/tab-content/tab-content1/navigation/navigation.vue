<template>
  <view class="module">
    <view class="module-content">
      <view class="module-header"></view>
      <view class="module-body">
        <view class="module-menu">
          <view class="module-row row">
            <view class="module-col col-3" v-for="(item,index) in items" :key="index">
              <view class="module-item" @click="onHandleRoute(item)">
                <view class="item-icon iconfont " :class="item.icon"></view>
                <view class="item-text">{{item.text}}</view>
              </view>
            </view>
          </view>
        </view>
      </view>
      <view class="module-footer"></view>
    </view>
  </view>
</template>

<script type="text/ecmascript-6">
  import mixins from '../../../../../../mixins';
  import * as $routes from '../../../../../../routes';

  export default {
    components: {},
    name: "navigation",
    data() {
      return {
        items: [
          {
            text: '租房',
            icon: 'icon-nav01',
            path: $routes.WAIT.path
          },
          {
            text: '二手房',
            icon: 'icon-nav02',
            path: $routes.WAIT.path
          },
          {
            text: '新房',
            icon: 'icon-nav03',
            path: $routes.WAIT.path
          },
          {
            text: '房贷计算',
            icon: 'icon-nav04',
            path: $routes.WAIT.path
          },
          {
            text: '房源发布',
            icon: 'icon-nav05',
            path: $routes.WAIT.path
          }
        ]
      }
    },
    mixins: [mixins],
    props: {},
    methods: {
      onHandleRoute(item) {
        const {path} = item;
        this.navigateTo(path);
      }
    },
    created() {
    }
  }
</script>

<style lang="less">
  @import "../../../../../../assets/less/common";

  .module {
    .module-content {
      .module-header {
      }
      .module-body {
        .module-menu {
          .module-row {
            .module-col {
              width: 20%;
              .module-item {
                padding: unit(30, rpx) 0;
                text-align: center;
                .item-icon {
                  width: unit(90, rpx);
                  height: unit(90, rpx);
                  line-height: unit(90, rpx);
                  margin: 0 auto unit(20, rpx);
                  border-radius: 100%;
                  font-size: @fontSize50;
                  color: @white;
                }
                .item-text {
                  height: unit(40, rpx);
                  line-height: unit(40, rpx);
                  font-size: @fontSize26;
                  color: @fontColor1;
                }
              }
              &:nth-child(1) {
                .item-icon {
                  background: -webkit-linear-gradient(-45deg, #ffd800, #ffa200);
                }
              }
              &:nth-child(2) {
                .item-icon {
                  background: -webkit-linear-gradient(-45deg, #8bffdd, #00c289);
                }
              }
              &:nth-child(3) {
                .item-icon {
                  background: -webkit-linear-gradient(-45deg, #00ccff, #0078ff);
                }
              }
              &:nth-child(4) {
                .item-icon {
                  background: -webkit-linear-gradient(-45deg, #fff9b3, #ffcb3e);
                }
              }
              &:nth-child(5) {
                .item-icon {
                  background: -webkit-linear-gradient(-45deg, #ffb49a, #ff4800);
                }
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