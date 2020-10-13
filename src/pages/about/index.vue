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
                                                        <text class="module-text">version1.0.0</text>
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
    import * as $config from '../../../config';

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
                    .mixinTop(unit(90, rpx));
                    .scroll-view {
                        height: 100%;
                        .scroll-content {
                            padding-top: unit(20, rpx);
                            .module {
                                .module-content {
                                    .module-header {
                                    }
                                    .module-body {
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
