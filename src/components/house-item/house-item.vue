<template>
    <view class="item">
        <view class="item-row row">
            <view class="item-col col-4">
                <view class="item-img">
                    <lazy-image src=""/>
                </view>
            </view>
            <view class="item-col col-8">
                <view class="item-info">
                    <view class="item-title ellipsis">卡地亚 三室两厅一厨一卫 8楼 108平精装 报115万</view>
                    <view class="item-small ellipsis">2室1厅1卫 / 108m² / 朝南 / 卡地亚花园</view>
                    <view class="item-tags">
                        <view class="item-tag">南北通透</view>
                        <view class="item-tag">南北通透</view>
                        <view class="item-tag">南北通透</view>
                        <view class="item-tag">南北通透</view>
                    </view>
                    <view class="item-price">
                        <text class="item-total">115
                            <text class="unit">万元</text>
                        </text>
                        <text class="item-unit">10648.1元/m²</text>
                    </view>
                </view>
            </view>
        </view>
    </view>
</template>

<script type="text/ecmascript-6">

    import LazyImage from "../lazy-image/lazy-image";

    export default {
        components: {
            LazyImage
        },
        name: "house-item",
        data() {
            return {}
        },
        props: {},
        methods: {},
        created() {
        }
    }
</script>

<style lang="less">
    @import "../../assets/less/common";

    .item {
        overflow: hidden;
        position: relative;
        padding: 0 unit(30, rpx);
        background-color: @white;
        .item-row {
            padding: unit(30, rpx) 0;
            border-bottom: 0.5px solid @borderColor2;
            .item-col {
                &.col-4 {
                    width: 32%;
                    .item-img {
                        height: unit(180, rpx);
                    }
                }
                &.col-8 {
                    .item-info {
                        padding-left: unit(20, rpx);
                        .item-title {
                            height: unit(40, rpx);
                            line-height: unit(40, rpx);
                            font-size: @fontSize32;
                            color: @fontColor1;
                            font-weight: bold;
                        }
                        .item-small {
                            height: unit(50, rpx);
                            line-height: unit(50, rpx);
                            font-size: @fontSize24;
                            color: @fontColor3;
                        }
                        .item-tags {
                            display: flex;
                            flex-wrap: wrap;
                            height: unit(40, rpx);
                            overflow: hidden;
                            .item-tag {
                                background-color: @tagColor;
                                line-height: unit(40, rpx);
                                margin-right: unit(10, rpx);
                                padding: 0 unit(10, rpx);
                                font-size: @fontSize24;
                                color: @theme;
                                &:last-child {
                                    margin-right: 0;
                                }
                            }
                        }
                        .item-price {
                            height: unit(50, rpx);
                            line-height: unit(50, rpx);
                            .item-total {
                                font-size: @fontSize40;
                                color: @priceColor;
                                font-weight: bold;
                                .unit {
                                    font-size: @fontSize24;
                                    font-weight: normal;
                                }
                            }
                            .item-unit {
                                margin-left: unit(10, rpx);
                                font-size: @fontSize24;
                                font-weight: normal;
                                color: @fontColor3;
                            }
                        }
                    }
                }
            }
        }
        &:last-child {
            .item-row {
                border: none;
            }
        }
    }
</style>