<template>
    <view class="container">
        <view class="content">
            <view class="header">
                <nav-bar title="历史浏览"/>
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
        components: {NavBar},
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

    .container {
        .content {
            .header {
            }
            .body {

            }
            .footer {
            }
        }
    }
</style>
