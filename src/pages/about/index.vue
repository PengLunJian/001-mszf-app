<template>
    <view class="container">
        <view class="content">
            <view class="header">
                <nav-bar title="关于我们"/>
            </view>
            <view class="body">
                <view class="context fade-in">
                    <scroll-view class="scroll-view" :scroll-y="isScroll">
                        <view class="scroll-content">
                            <view class="module">
                                <view class="module-content">
                                    <view class="module-header"></view>
                                    <view class="module-body">
                                        <view class="module-row row">
                                            <view class="module-col col-12">
                                                <view class="module-image">
                                                    <lazy-image :src="url" width="30%"/>
                                                </view>
                                            </view>
                                            <view class="module-col col-12">
                                                <view class="module-items">
                                                    <view class="module-item btn" @click="onHandlePhone">
                                                        <view class="module-icon iconfont icon-phone"></view>
                                                        <view class="module-text">联系电话</view>
                                                        <view class="module-next iconfont icon-next"></view>
                                                    </view>
                                                    <view class="module-item btn" @click="onHandleService">
                                                        <view class="module-icon iconfont icon-msg"></view>
                                                        <view class="module-text">在线客服</view>
                                                        <view class="module-next iconfont icon-next"></view>
                                                    </view>
                                                    <view class="module-item btn" @click="onHandleAddress">
                                                        <view class="module-icon iconfont icon-address"></view>
                                                        <view class="module-text">地址导航</view>
                                                        <view class="module-next iconfont icon-next"></view>
                                                    </view>
                                                    <view class="module-item btn" @click="onHandleShare">
                                                        <view class="module-icon iconfont icon-share"></view>
                                                        <view class="module-text">我要分享</view>
                                                        <view class="module-next iconfont icon-next"></view>
                                                    </view>
                                                </view>
                                            </view>
                                        </view>
                                    </view>
                                    <view class="module-footer"></view>
                                </view>
                            </view>
                        </view>
                    </scroll-view>
                </view>
            </view>
            <view class="footer"></view>
        </view>
    </view>
</template>

<script type="text/ecmascript-6">
    import mixins from '../../mixins';
    import NavBar from "../../components/nav-bar/nav-bar";
    import LazyImage from "../../components/lazy-image/lazy-image";
    import * as $config from '../../config';

    export default {
        components: {
            LazyImage,
            NavBar
        },
        mixins: [mixins],
        data() {
            return {
                isScroll: true,
                url: $config.DEFAULT_ABOUT
            }
        },
        methods: {},
        onLoad() {
        }
    }
</script>

<style lang="less">
    @import "../../assets/less/common";

    @height: unit(110, rpx);
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
                    padding-top: @top1;
                    .scroll-view {
                        height: 100%;
                        .scroll-content {
                            .module {
                                background-color: @transparent;
                                .module-content {
                                    .module-header {
                                    }
                                    .module-body {
                                        .module-row {
                                            padding: unit(15, rpx);
                                            .module-col {
                                                padding: unit(15, rpx);
                                                .module-image {
                                                    overflow: hidden;
                                                    position: relative;
                                                    height: unit(300, rpx);
                                                    will-change: transform;
                                                    border-radius: @borderRadius20;
                                                }
                                                .module-items {
                                                    overflow: hidden;
                                                    background-color: @white;
                                                    border-radius: @borderRadius20;
                                                    .module-item {
                                                        display: flex;
                                                        height: unit(110, rpx);
                                                        line-height: unit(110, rpx);
                                                        border-bottom: 0.5px solid @borderColor2;
                                                        text-align: center;
                                                        .module-icon {
                                                            width: unit(110, rpx);
                                                            position: relative;
                                                            -webkit-text-fill-color: transparent;
                                                            -webkit-background-clip: text;
                                                            font-size: @fontSize46;
                                                        }
                                                        .module-text {
                                                            height: 100%;
                                                            font-size: @fontSize32;
                                                            text-align: left;
                                                        }
                                                        .module-next {
                                                            position: absolute;
                                                            top: 0;
                                                            right: 0;
                                                            width: unit(110, rpx);
                                                            height: unit(110, rpx);
                                                            color: @fontColor5;
                                                        }
                                                        &:last-child {
                                                            border: none;
                                                        }
                                                        &:nth-child(1) {
                                                            .module-icon {
                                                                background-image: -webkit-linear-gradient(left, #42ff55, #12c14a);
                                                            }
                                                        }
                                                        &:nth-child(2) {
                                                            .module-icon {
                                                                background-image: -webkit-linear-gradient(left, #ffb698, #ff714f);
                                                            }
                                                        }
                                                        &:nth-child(3) {
                                                            .module-icon {
                                                                background-image: -webkit-linear-gradient(left, #060BFF, #17F2FF);
                                                            }
                                                        }
                                                        &:nth-child(4) {
                                                            .module-icon {
                                                                background-image: -webkit-linear-gradient(left, #FFFF00, #FFB421);
                                                            }
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
                        }
                    }
                }
            }
            .footer {
            }
        }
    }
</style>
