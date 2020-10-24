<template>
    <view class="container">
        <view class="content">
            <view class="header">
                <nav-bar title="选择城市"/>
            </view>
            <view class="body">
                <loading :isShow="isLoading&&!isData.length"/>
                <error :isShow="isFailure&&!isData.length" @refresh="onRefresh"/>
                <empty :isShow="isSuccess&&!isData.length"/>
                <view class="context fade-in" v-if="isSuccess">
                    <scroll-view class="scroll-view" :scroll-y="isScroll">
                        <view class="scroll-content">
                            <view class="module" v-for="(item,index) in isData"
                                  v-if="item.items.length" :key="index">
                                <view class="module-content">
                                    <view class="module-header">{{item.label}}</view>
                                    <view class="module-body">
                                        <view class="module-citys">
                                            <view class="module-row row">
                                                <view class="module-col col-3" v-for="(city,index) in item.items"
                                                      :key="index">
                                                    <view class="module-item" @click="onHandleBtnItem(city)">
                                                        {{city.fullname}}
                                                    </view>
                                                </view>
                                            </view>
                                        </view>
                                    </view>
                                    <div class="module-footer"></div>
                                </view>
                            </view>
                        </view>
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
    import Loading from "../../components/loading/loading";
    import Error from "../../components/error/error";
    import Empty from "../../components/empty/empty";
    import * as $controller from './controller';

    export default {
        components: {
            Empty,
            Error,
            Loading,
            NavBar
        },
        mixins: [mixins],
        data() {
            return {
                pageSize: 5,
                pageIndex: 1,
                isScroll: true
            }
        },
        computed: $controller.states,
        methods: $controller.actions,
        onLoad() {
            if (!this.isSuccess) {
                this.exeAjaxSelectCitys();
            }
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
                    padding-top: @top1;
                    .scroll-view {
                        height: 100%;
                        .scroll-content {
                            .module {
                                margin: 0;
                                .module-content {
                                    .module-header {
                                        height: unit(70, rpx);
                                        line-height: unit(70, rpx);
                                        padding: 0 unit(30, rpx);
                                        background-color: #F7F7F7;
                                        font-size: @fontSize28;
                                        color: @fontColor1;
                                        font-weight: bold;
                                    }
                                    .module-body {
                                        .module-citys {
                                            text-align: center;
                                            .module-row {
                                                padding: unit(15, rpx);
                                                .module-col {
                                                    padding: unit(15, rpx);
                                                    .module-item {
                                                        overflow: hidden;
                                                        height: unit(60, rpx);
                                                        padding: 0 unit(20, rpx);
                                                        line-height: unit(60, rpx);
                                                        border-radius: unit(60, rpx);
                                                        background-color: @bgColor;
                                                        font-size: @fontSize24;
                                                        color: @fontColor3;
                                                        &.on {
                                                            background: -webkit-linear-gradient(left, #FFCC00, @theme);
                                                            color: @white;
                                                        }
                                                        &.checked {
                                                            background: -webkit-linear-gradient(left, #FFCC00, @theme);
                                                            color: @white;
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                    .module-footer {

                                    }
                                }
                            }
                        }
                    }
                }
            }
            .footer {
            }
        }
    }
</style>
