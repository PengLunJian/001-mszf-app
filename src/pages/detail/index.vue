<template>
    <view class="container">
        <view class="content">
            <view class="header">
                <nav-bar title="房源详情"/>
            </view>
            <view class="body">
                <view class="context fade-in">
                    <scroll-view class="scroll-view" :scroll-y="isScroll">
                        <view class="scroll-content"></view>
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
                    padding-top: @top1;
                    .scroll-view {
                        height: 100%;
                        .scroll-content {

                        }
                    }
                }
            }
            .footer {
            }
        }
    }
</style>
