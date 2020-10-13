<template>
    <view class="container">
        <view class="content">
            <view class="header">
                <nav-bar title="敬请期待"/>
            </view>
            <view class="body">
                <view class="context fade-in">
                    <scroll-view class="scroll-view" :scroll-y="isScroll">
                        <view class="scroll-content">
                            <waiting/>
                        </view>
                    </scroll-view>
                </view>
            </view>
            <view class="footer"></view>
        </view>
    </view>
</template>

<script type="text/ecmascript-6">

    import NavBar from "../../components/nav-bar/nav-bar";
    import Waiting from "../../components/waiting/waiting";

    export default {
        components: {
            Waiting,
            NavBar
        },
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
                    .scroll-view {
                        height: 100%;
                        .scroll-content {
                            height: 100%;
                        }
                    }
                }
            }
            .footer {
            }
        }
    }
</style>
