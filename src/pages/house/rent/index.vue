<template>
    <view class="container">
        <view class="content">
            <view class="header">
                <nav-bar title="房源列表"/>
                <tab-bar :tabIndex="tabIndex" @onChange="onHandleChange"/>
            </view>
            <view class="body">
                <view class="context fade-in">
                    <scroll-view class="scroll-view" :scroll-y="isScroll">
                        <view class="scroll-content">
                            <view class="items">
                                <house-item/>
                                <house-item/>
                                <house-item/>
                                <house-item/>
                                <house-item/>
                                <house-item/>
                                <house-item/>
                                <house-item/>
                                <house-item/>
                                <house-item/>
                                <house-item/>
                                <house-item/>
                            </view>
                            <loading-more length="10" totalCount="100"/>
                        </view>
                    </scroll-view>
                </view>
            </view>
            <view class="footer"></view>
        </view>
    </view>
</template>

<script type="text/ecmascript-6">
    import mixins from '../../../mixins/index';
    import NavBar from "../../../components/nav-bar/nav-bar";
    import HouseItem from "../../../components/house-item/house-item";
    import LoadingMore from "../../../components/loading-more/loading-more";
    import TabBar from "../components/tab-bar/tab-bar";

    export default {
        components: {
            TabBar,
            LoadingMore,
            HouseItem,
            NavBar
        },
        mixins: [mixins],
        data() {
            return {
                isScroll: true,
                tabIndex: -1
            }
        },
        methods: {
            onHandleChange(index) {
                console.log(index);
            }
        },
        onLoad() {
        }
    }
</script>

<style lang="less">
    @import "../../../assets/less/common";

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
                    padding-top: calc(@statusBarHeight + unit(170, rpx));
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
