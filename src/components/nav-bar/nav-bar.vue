<template>
    <view class="nav-bar">
        <view class="nav-bar-sb"></view>
        <view class="nav-bar-tb">
            <view class="nav-btns">
                <view class="nav-btn iconfont icon-back" @click="onHandleBack"></view>
                <view class="nav-btn iconfont icon-home" @click="onHandleHome"></view>
            </view>
            <view class="nav-title">{{title}}</view>
        </view>
    </view>
</template>

<script type="text/ecmascript-6">
    import mixins from '../../mixins';
    import * as $routes from '../../routes';

    export default {
        name: "nav-bar",
        mixins: [mixins],
        data() {
            return {}
        },
        props: {
            title: {
                type: String,
                default: '码上找房'
            }
        },
        methods: {
            onHandleBack() {
                this.navigateBack(1);
            },
            onHandleHome() {
                this.reLaunch($routes.MAIN.path);
            }
        },
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
        z-index: 1000;
        background-color: @white;
        .nav-bar-sb {
            width: 100%;
            height: @statusBarHeight;
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