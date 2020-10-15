<template>
    <view class="container">
        <view class="content">
            <view class="header">
                <top-bar :tabIndex="tabIndex"/>
            </view>
            <view class="body">
                <view class="context fade-in">
                    <scroll-view class="scroll-view" :scroll-y="isScroll">
                        <view class="scroll-content">
                            <tab-content :tabIndex="tabIndex"/>
                        </view>
                    </scroll-view>
                </view>
            </view>
            <view class="footer">
                <tab-bar :tabIndex="tabIndex" @onChange="onHandleChange"/>
            </view>
        </view>
    </view>
</template>

<script type="text/ecmascript-6">
    import mixins from '../../mixins';
    import TabBar from "./components/tab-bar/tab-bar";
    import TopBar from "./components/top-bar/top-bar";
    import TabContent from "./components/tab-content/tab-content";
    import * as $controller from './controller';

    export default {
        components: {
            TopBar,
            TabContent,
            TabBar
        },
        data() {
            return {
                tabIndex: 0,
                isScroll: true
            }
        },
        mixins: [mixins],
        computed: $controller.states,
        methods: $controller.actions,
        onLoad() {
        }
    }
</script>

<style lang="less">
    @import "../../assets/less/common";

    .container {
        min-height: 100vh;
        .content {
            height: 100vh;
            .header {
            }
            .body {
                height: 100%;
                position: relative;
                .context {
                    height: 100%;
                    padding-top: calc(@statusBarHeight + unit(90, rpx));
                    padding-bottom: unit(110, rpx);
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
    }
</style>
