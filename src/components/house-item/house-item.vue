<template>
    <view class="item" @click="onHandleRoute">
        <view class="item-row row" v-if="item.type===1">
            <view class="item-col col-4">
                <view class="item-img">
                    <lazy-image :src="getPicUrl" mode="aspectFill"/>
                </view>
            </view>
            <view class="item-col col-8">
                <view class="item-info">
                    <view class="item-title ellipsis">{{item.title}}</view>
                    <view class="item-small ellipsis">{{item.apart}}室 /
                        建面{{item.minfloorArea||0}}-{{item.maxfloorArea||0}}m² / {{item.houseName}}
                    </view>
                    <view class="item-tags">
                        <view class="item-tag" v-for="(item,index) in getTags" :key="index">{{item}}</view>
                    </view>
                    <view class="item-price">
                        <text class="item-total">{{item.price}}
                            <text class="unit">元/m²</text>
                        </text>
                    </view>
                </view>
            </view>
        </view>
        <view class="item-row row" v-if="item.type===2">
            <view class="item-col col-4">
                <view class="item-img">
                    <lazy-image :src="getPicUrl" mode="aspectFill"/>
                </view>
            </view>
            <view class="item-col col-8">
                <view class="item-info">
                    <view class="item-title ellipsis">{{item.title}}</view>
                    <view class="item-small ellipsis">{{item.apart}} / {{item.floorArea}}m² / {{item.direction}} /
                        {{item.houseName}}
                    </view>
                    <view class="item-tags">
                        <view class="item-tag" v-for="(item,index) in getTags" :key="index">{{item}}</view>
                    </view>
                    <view class="item-price">
                        <text class="item-total">{{item.totalPrice}}
                            <text class="unit">万元</text>
                        </text>
                        <text class="item-unit">{{getUnitPrice}}元/m²</text>
                    </view>
                </view>
            </view>
        </view>
        <view class="item-row row" v-if="item.type===3">
            <view class="item-col col-4">
                <view class="item-img">
                    <lazy-image :src="getPicUrl" mode="aspectFill"/>
                </view>
            </view>
            <view class="item-col col-8">
                <view class="item-info">
                    <view class="item-title ellipsis">{{item.title}}</view>
                    <view class="item-small ellipsis">{{item.apart}} / {{item.floorArea}}m² / {{item.leaseWay}} /
                        {{item.houseName}}
                    </view>
                    <view class="item-tags">
                        <view class="item-tag" v-for="(item,index) in getTags" :key="index">{{item}}</view>
                    </view>
                    <view class="item-price">
                        <text class="item-total">
                            {{item.price}}
                            <text class="unit">元/月</text>
                        </text>
                    </view>
                </view>
            </view>
        </view>
    </view>
</template>

<script type="text/ecmascript-6">
    import LazyImage from "../lazy-image/lazy-image";
    import apis from '../../apis';
    import mixins from '../../mixins';
    import * as $config from '../../config';
    import * as $routes from '../../routes';

    export default {
        components: {
            LazyImage
        },
        name: "house-item",
        mixins: [mixins],
        data() {
            return {}
        },
        props: {
            item: {
                type: Object,
                default: null
            }
        },
        computed: {
            getPicUrl() {
                const {picUrl} = this.item;
                const url = picUrl.length ? apis.fileUrl + picUrl[0] : $config.DEFAULT_HOUSE;
                return url;
            },
            getTags() {
                const {tags} = this.item;
                return tags.split(' ');
            },
            getUnitPrice() {
                const {totalPrice, floorArea} = this.item;
                return (totalPrice * 10000 / floorArea).toFixed(2);
            }
        },
        methods: {
            onHandleRoute() {
                this.navigateTo($routes.DETAIL.path);
            }
        },
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