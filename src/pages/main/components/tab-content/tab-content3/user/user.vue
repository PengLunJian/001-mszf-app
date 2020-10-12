<template>
    <view class="module">
        <view class="module-content">
            <view class="module-header"></view>
            <view class="module-body">
                <view class="module-user">
                    <view class="user-img">
                        <lazy-image :src="url"/>
                    </view>
                    <view class="user-info">
                        <view class="user-name">177****772</view>
                    </view>
                </view>
            </view>
            <view class="module-footer"></view>
        </view>
    </view>
</template>

<script type="text/ecmascript-6">

    import LazyImage from "../../../../../../components/lazy-image/lazy-image";
    import * as $config from '../../../../../../config';

    export default {
        components: {
            LazyImage
        },
        name: "user",
        data() {
            return {
                url: $config.DEFAULT_USER,
            }
        },
        props: {},
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
            }
            .module-body {
                .module-user {
                    position: relative;
                    height: unit(220, rpx);
                    padding-left: unit(40, rpx);
                    background-color: @theme;
                    .user-img {
                        overflow: hidden;
                        width: unit(120, rpx);
                        height: unit(120, rpx);
                        display: inline-block;
                        vertical-align: middle;
                        border: 2px solid @white;
                        background-color: @white;
                        border-radius: @borderRadius100;
                    }
                    .user-info {
                        display: inline-block;
                        vertical-align: middle;
                        padding: 0 unit(30, rpx);
                        line-height: unit(40, rpx);
                        color: @white;
                        .user-name {
                            font-size: @fontSize40;
                        }
                        .user-desc {
                            margin-top: unit(5, rpx);
                            font-size: @fontSize24;
                        }
                    }
                    &:before {
                        content: '';
                        height: 100%;
                        display: inline-block;
                        vertical-align: middle;
                    }
                }
            }
            .module-footer {

            }
        }
    }
</style>