<template>
    <view class="module">
        <view class="module-content">
            <view class="module-header">
                <view class="module-title">{{title}}</view>
            </view>
            <view class="module-body">
                <view class="module-items">
                    <house-item v-for="(item,index) in items" :item="item" :key="index"/>
                    <empty :isShow="!items.length"/>
                </view>
            </view>
            <view class="module-footer"></view>
        </view>
    </view>
</template>

<script type="text/ecmascript-6">
    import HouseItem from "../../../../../../components/house-item/house-item";
    import Empty from "../../../../../../components/empty/empty";

    export default {
        components: {
            Empty,
            HouseItem
        },
        name: "house",
        data() {
            return {}
        },
        props: {
            title: {
                type: String,
                default: ''
            },
            items: {
                type: Array,
                default: []
            }
        },
        methods: {},
        created() {
        }
    }
</script>

<style lang="less">
    @import "../../../../../../assets/less/common";

    .module {
        .module-content {
            .module-header {
                padding: unit(30, rpx) unit(30, rpx) 0;
                .module-title {
                    line-height: unit(32, rpx);
                    padding-left: unit(20, rpx);
                    border-left: 4px solid @theme;
                    font-size: @fontSize32;
                    letter-spacing: 0.5px;
                    font-weight: bold;
                    color: @fontColor1;
                }
            }
            .module-body {
                .module-items {
                    min-height: unit(500, rpx);
                }
            }
            .module-footer {
            }
        }
    }
</style>