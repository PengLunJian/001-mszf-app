<template>
    <view class="container">
        <view class="content">
            <view class="header">
                <nav-bar title="系统设置"/>
            </view>
            <view class="body">
                <view class="context fade-in">
                    <scroll-view class="scroll-view" :scroll-y="isScroll">
                        <view class="scroll-content">
                            <view class="module">
                                <view class="module-content">
                                    <view class="module-header"></view>
                                    <view class="module-body">
                                        <view class="module-items">
                                            <view class="module-item btn" @click="onHandleRoute">
                                                <view class="module-row row">
                                                    <view class="module-col col-4">
                                                        <text class="module-text">关于我们</text>
                                                    </view>
                                                    <view class="module-col col-8">
                                                        <text class="module-next iconfont icon-next"></text>
                                                    </view>
                                                </view>
                                            </view>
                                            <view class="module-item btn" @click="onHandleStorage">
                                                <view class="module-row row">
                                                    <view class="module-col col-4">
                                                        <text class="module-text">清理缓存</text>
                                                    </view>
                                                    <view class="module-col col-8">
                                                        <text class="module-next iconfont icon-next"></text>
                                                    </view>
                                                </view>
                                            </view>
                                            <view class="module-item btn" @click="onHandleVersion">
                                                <view class="module-row row">
                                                    <view class="module-col col-4">
                                                        <text class="module-text">系统更新</text>
                                                    </view>
                                                    <view class="module-col col-8">
                                                        <text class="module-text">Version1.0.0</text>
                                                        <text class="module-next iconfont icon-next"></text>
                                                    </view>
                                                </view>
                                            </view>
                                        </view>
                                    </view>
                                    <view class="module-footer">
                                        <view class="btn btn-exit" @click="onHandleExit">退出登录</view>
                                    </view>
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
    import * as $routes from '../../routes';

    export default {
        components: {
            NavBar
        },
        mixins: [mixins],
        data() {
            return {
                isScroll: true
            }
        },
        methods: {
            onHandleRoute() {
                this.navigateTo($routes.ABOUT.path);
            },
            onHandleStorage() {
            },
            onHandleVersion() {
            },
            onHandleExit() {
            }
        },
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
                    padding-top: calc(@statusBarHeight + unit(90, rpx));
                    .scroll-view {
                        height: 100%;
                        .scroll-content {
                            padding-top: unit(20, rpx);
                            .module {
                                .module-content {
                                    .module-header {
                                    }
                                    .module-body {
                                        .module-items {
                                            .module-item {
                                                line-height: @height;
                                                padding-left: unit(30, rpx);
                                                .module-row {
                                                    border-bottom: 0.5px solid @borderColor1;
                                                    .col-4 {
                                                        .module-text {
                                                            font-size: @fontSize32;
                                                            letter-spacing: 1px;
                                                        }
                                                    }
                                                    .col-8 {
                                                        text-align: right;
                                                        .module-text {
                                                            font-size: @fontSize32;
                                                            color: @fontColor3;
                                                        }
                                                        .module-next {
                                                            padding: 0 unit(30, rpx);
                                                            color: @fontColor5;
                                                        }
                                                    }
                                                }
                                                &:last-child {
                                                    .module-row {
                                                        border: none;
                                                    }
                                                }
                                            }
                                        }
                                    }
                                    .module-footer {
                                        padding-top: unit(20, rpx);
                                        background-color: @bgColor;
                                        .btn-exit {
                                            line-height: @height;
                                            background-color: @white;
                                            font-size: @fontSize32;
                                            text-align: center;
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
