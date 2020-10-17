<template>
    <view class="loading fade-in" :class="{'fade-out':!isShow}" v-if="isLoading">
        <view class="loading-content">
            <view class="loading-icon"></view>
            <view class="loading-text"></view>
        </view>
    </view>
</template>

<script type="text/ecmascript-6">

    export default {
        name: "loading",
        data() {
            return {
                isLoading: true
            }
        },
        props: {
            isShow: {
                type: Boolean,
                default: false
            }
        },
        methods: {},
        watch: {
            isShow() {
                if (this.isShow) {
                    this.isLoading = this.isShow;
                } else {
                    setTimeout(() => {
                        this.isLoading = this.isShow;
                    }, 300);
                }
            }
        },
        created() {
        }
    }
</script>

<style lang="less">
    @import "../../assets/less/common";

    .loading {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1100;
        width: 100%;
        height: 100%;
        .loading-content {
            position: absolute;
            top: 50%;
            left: 50%;
            display: flex;
            margin-top: unit(-40, rpx);
            margin-left: unit(-130, rpx);
            .loading-icon {
                width: unit(80, rpx);
                height: unit(80, rpx);
                overflow: hidden;
                background-size: 30% auto;
                background-repeat: no-repeat;
                background-position: center center;
                background-image: url("./images/house@2x.png");
                &:before {
                    content: '';
                    width: 100%;
                    height: 100%;
                    display: block;
                    background-size: 100% auto;
                    background-repeat: no-repeat;
                    background-position: center center;
                    background-image: url("./images/round@2x.png");
                    animation: rotate 3s linear infinite;
                }
            }
            .loading-text {
                width: unit(160, rpx);
                height: unit(80, rpx);
                margin-left: unit(20, rpx);
                background-size: 100% auto;
                background-repeat: no-repeat;
                background-position: center center;
                background-image: url("./images/label@2x.png");
            }
        }
    }
</style>