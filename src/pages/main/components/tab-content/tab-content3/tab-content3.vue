<template>
    <view class="content">
        <view class="header">
            <view class="top-bar">
                <view class="top-bar-sb"></view>
                <view class="top-bar-nb">
                    <view class="top-bar-row row">
                        <view class="top-bar-col col-12">
                            <view class="top-bar-title">个人中心</view>
                        </view>
                    </view>
                </view>
            </view>
        </view>
        <view class="body">
            <view class="context fade-in">
                <scroll-view class="scroll-view" :scroll-y="isScroll">
                    <view class="scroll-content">
                        <user/>
                        <list/>
                    </view>
                </scroll-view>
            </view>
        </view>
        <view class="footer">
        </view>
    </view>
</template>

<script type="text/ecmascript-6">

    import User from "./user/user";
    import List from "./list/list";

    export default {
        components: {
            List,
            User
        },
        name: "tab-content3",
        data() {
            return {
                isScroll: true
            }
        },
        props: {},
        methods: {},
        created() {
            console.log(3);
        }
    }
</script>

<style lang="less">
    @import "../../../../../assets/less/common";

    .content {
        height: 100vh;
        .header {
            .top-bar {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 1000;
                background-color: @white;
                .top-bar-sb {
                    width: 100%;
                    height: var(--status-bar-height);
                }
                .top-bar-nb {
                    position: relative;
                    height: unit(90, rpx);
                    line-height: unit(90, rpx);
                    text-align: center;
                    .top-bar-row {
                        .top-bar-col {
                            &.col-3 {
                                display: flex;
                                flex-wrap: nowrap;
                                padding: 0 unit(30, rpx);
                                .top-bar-icon {
                                    font-size: @fontSize46;
                                }
                                .top-bar-text {
                                    margin-left: unit(4, rpx);
                                    font-size: @fontSize32;
                                }
                            }
                            &.col-6 {
                                padding: unit(15, rpx) unit(30, rpx);
                                .btn-search {
                                    display: flex;
                                    flex-wrap: nowrap;
                                    height: unit(60, rpx);
                                    line-height: unit(60, rpx);
                                    border-radius: unit(60, rpx);
                                    background-color: #F0F0F0;;
                                    color: @fontColor3;
                                    .top-bar-icon {
                                        margin: 0 unit(15, rpx);
                                        font-size: @fontSize32;
                                        text-align: center;
                                    }
                                    .top-bar-text {
                                        font-size: @fontSize24;
                                        text-align: left;
                                    }
                                }
                            }
                            &.col-12 {
                                .top-bar-title {
                                    font-size: @fontSize32;
                                    font-weight: bold;
                                }
                            }
                        }
                    }
                }
            }
        }
        .body {
            height: 100%;
            position: relative;
            .context {
                height: 100%;
                padding: @top1 0 unit(110, rpx);
                .scroll-view {
                    height: 100%;
                    .scroll-content {
                        padding-bottom: unit(20, rpx);
                    }
                }
            }
        }
        .footer {
        }
    }
</style>