<template>
    <view class="module">
        <view class="module-content">
            <view class="module-header"></view>
            <view class="module-body">
                <view class="module-items">
                    <view class="module-item btn" v-for="(item,index) in items"
                          :key="index" @click="onHandleRoute(item)">
                        <view class="module-icon iconfont" :class="item.icon"></view>
                        <view class="module-text">{{item.text}}</view>
                        <view class="module-next iconfont icon-next"></view>
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
        mixins: [mixins],
        name: "list",
        data() {
            return {
                items: [
                    {
                        text: '我的收藏',
                        icon: 'icon-favorite',
                        path: $routes.FAVORITE.path
                    },
                    {
                        text: '历史浏览',
                        icon: 'icon-history',
                        path: $routes.HISTORY.path
                    },
                    {
                        text: '房源发布',
                        icon: 'icon-release',
                        path: $routes.RELEASE.path
                    },
                    {
                        text: '意见反馈',
                        icon: 'icon-suggest',
                        path: $routes.SUGGEST.path
                    },
                    {
                        text: '系统设置',
                        icon: 'icon-setting',
                        path: $routes.SETTING.path
                    },
                ]
            }
        },
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
                .module-items {
                    .module-item {
                        height: unit(110, rpx);
                        line-height: unit(110, rpx);
                        padding-left: unit(110, rpx);
                        text-align: center;
                        .module-icon,
                        .module-next {
                            position: absolute;
                            top: 0;
                            width: unit(110, rpx);
                            height: unit(110, rpx);
                            &.module-icon {
                                left: 0;
                                -webkit-text-fill-color: transparent;
                                -webkit-background-clip: text;
                                font-size: @fontSize46;
                            }
                            &.module-next {
                                right: 0;
                                color: @fontColor5;
                            }
                        }
                        .module-text {
                            height: 100%;
                            border-bottom: 0.5px solid @borderColor1;
                            font-size: @fontSize32;
                            letter-spacing: 1px;
                            text-align: left;
                        }
                        &:last-child {
                            .module-text {
                                border: none;
                            }
                        }
                        &:nth-child(1) {
                            .module-icon {
                                background-image: -webkit-linear-gradient(left, #FF2714, #FF841D);
                            }
                        }
                        &:nth-child(2) {
                            .module-icon {
                                background-image: -webkit-linear-gradient(left, #FFFF00, #FFB421);
                            }
                        }
                        &:nth-child(3) {
                            .module-icon {
                                background-image: -webkit-linear-gradient(left, #00FF00, #12B347);
                            }
                        }
                        &:nth-child(4) {
                            .module-icon {
                                background-image: -webkit-linear-gradient(left, #FF8F8F, #DE7979);
                            }
                        }
                        &:nth-child(5) {
                            .module-icon {
                                background-image: -webkit-linear-gradient(left, #060BFF, #17F2FF);
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