<template>
    <view class="top-bar">
        <view class="top-bar-sb"></view>
        <view class="top-bar-nb">
            <view class="top-bar-01" v-if="tabIndex===0">
                <view class="top-bar-row row">
                    <view class="top-bar-col col-3 ellipsis" @click="onHandleAddress">
                        <view class="top-bar-icon iconfont icon-location"></view>
                        <view class="top-bar-text">宣城市</view>
                    </view>
                    <view class="top-bar-col col-6">
                        <view class="btn btn-search" @click="onHandleSearch">
                            <view class="top-bar-icon iconfont icon-search"></view>
                            <view class="top-bar-text">请输入小区/商圈</view>
                        </view>
                    </view>
                </view>
            </view>
            <view class="top-bar-02" v-if="tabIndex===1">
                <view class="top-bar-row row">
                    <view class="top-bar-col col-12">
                        <view class="top-bar-title">消息列表</view>
                    </view>
                </view>
            </view>
            <view class="top-bar-03" v-if="tabIndex===2">
                <view class="top-bar-row row">
                    <view class="top-bar-col col-12">
                        <view class="top-bar-title">个人中心</view>
                    </view>
                </view>
            </view>
        </view>
    </view>
</template>

<script type="text/ecmascript-6">
    import mixins from '../../../../mixins';
    import * as $routes from '../../../../routes';

    export default {
        components: {},
        mixins: [mixins],
        name: "top-bar",
        data() {
            return {}
        },
        props: {
            tabIndex: {
                type: Number,
                default: 0
            }
        },
        methods: {
            onHandleAddress() {
                this.navigateTo($routes.ADDRESS.path);
            },
            onHandleSearch() {
                this.navigateTo($routes.SEARCH.path);
            }
        },
        created() {
        }
    }
</script>

<style lang="less">
    @import "../../../../assets/less/common";

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
</style>