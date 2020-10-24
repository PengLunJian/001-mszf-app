<template>
    <view class="content">
        <view class="header">
            <view class="top-bar">
                <view class="top-bar-sb"></view>
                <view class="top-bar-nb">
                    <view class="top-bar-row row">
                        <view class="top-bar-col col-3 ellipsis" @click="onHandleAddress">
                            <view class="top-bar-icon iconfont icon-location"></view>
                            <view class="top-bar-text">{{isCity.fullname}}</view>
                        </view>
                        <view class="top-bar-col col-6">
                            <view class="btn btn-search" @click="onHandleSearch">
                                <view class="top-bar-icon iconfont icon-search"></view>
                                <view class="top-bar-text">请输入小区/商圈</view>
                            </view>
                        </view>
                    </view>
                </view>
            </view>
        </view>
        <view class="body">
            <loading :isShow="isLoading"/>
            <error :isShow="isFailure" @refresh="onRefresh"/>
            <view class="context fade-in" v-if="isSuccess">
                <scroll-view class="scroll-view" :scroll-y="isScroll">
                    <view class="scroll-content">
                        <banner/>
                        <navigation/>
                        <house title="租房推荐" :items="isData[0].rows"/>
                        <house title="售房推荐" :items="isData[2].rows"/>
                        <house title="新房推荐" :items="isData[1].rows"/>
                    </view>
                </scroll-view>
            </view>
        </view>
        <view class="footer">
        </view>
    </view>
</template>

<script type="text/ecmascript-6">
    import {mapActions, mapState} from 'vuex';
    import Banner from "./banner/banner";
    import Navigation from "./navigation/navigation";
    import House from "./house/house";
    import Error from "../../../../../components/error/error";
    import Loading from "../../../../../components/loading/loading";
    import mixins from '../../../../../mixins';
    import * as $routes from '../../../../../routes';

    export default {
        components: {
            Loading,
            Error,
            House,
            Navigation,
            Banner
        },
        name: "tab-content1",
        mixins: [mixins],
        data() {
            return {
                isScroll: true,
                pageSize: 5,
                pageIndex: 1
            }
        },
        props: {},
        computed: {
            ...mapState({
                isLoading: state => state.INDEX.isLoading,
                isSuccess: state => state.INDEX.isSuccess,
                isFailure: state => state.INDEX.isFailure,
                isData: state => state.INDEX.isData,
                isCity: state => state.CITYS.isCity
            })
        },
        methods: {
            ...mapActions([
                'ajaxSelectIndex',
                'ajaxSelectAreas'
            ]),
            onHandleSearch() {
                this.navigateTo($routes.SEARCH.path);
            },
            onHandleAddress() {
                this.navigateTo($routes.ADDRESS.path);
            },
            exeAjaxSelectAreas() {
                const {id} = this.isCity;
                this.ajaxSelectAreas(id)
                    .then((res) => {
                        res = res || {};
                        console.log(res);
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            },
            exeAjaxSelectIndex() {
                const params = this.getParams();
                this.ajaxSelectIndex(params)
                    .then((res) => {
                        res = res || {};
                        console.log(res);
                    })
                    .catch((err) => {
                        console.log(err);
                    })
            },
            onRefresh() {
                this.exeAjaxSelectIndex();
            },
            getParams() {
                const {pageSize, pageIndex, isCity} = this;
                const {fullname} = isCity;
                return {
                    pageSize,
                    pageIndex,
                    city: fullname
                }
            }
        },
        created() {
            const {isSuccess} = this;
            if (!isSuccess) {
                this.exeAjaxSelectIndex();
            }
            this.exeAjaxSelectAreas();
        }
    }
</script>

<style lang="less">
    @import "../../../../../assets/less/common";

    .content {
        height: 100vh;
        .header {
            .top-bar {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 1000;
                background-color: @white;
                .top-bar-sb {
                    width: 100%;
                    height: var(--status-bar-height);
                }
                .top-bar-nb {
                    position: relative;
                    height: unit(90, rpx);
                    line-height: unit(90, rpx);
                    text-align: center;
                    .top-bar-row {
                        .top-bar-col {
                            &.col-3 {
                                display: flex;
                                flex-wrap: nowrap;
                                padding: 0 unit(30, rpx);
                                .top-bar-icon {
                                    font-size: @fontSize46;
                                }
                                .top-bar-text {
                                    margin-left: unit(4, rpx);
                                    font-size: @fontSize32;
                                }
                            }
                            &.col-6 {
                                padding: unit(15, rpx) unit(30, rpx);
                                .btn-search {
                                    display: flex;
                                    flex-wrap: nowrap;
                                    height: unit(60, rpx);
                                    line-height: unit(60, rpx);
                                    border-radius: unit(60, rpx);
                                    background-color: #F0F0F0;;
                                    color: @fontColor3;
                                    .top-bar-icon {
                                        margin: 0 unit(15, rpx);
                                        font-size: @fontSize32;
                                        text-align: center;
                                    }
                                    .top-bar-text {
                                        font-size: @fontSize24;
                                        text-align: left;
                                    }
                                }
                            }
                            &.col-12 {
                                .top-bar-title {
                                    font-size: @fontSize32;
                                    font-weight: bold;
                                }
                            }
                        }
                    }
                }
            }
        }
        .body {
            height: 100%;
            position: relative;
            .context {
                height: 100%;
                padding: @top1 0 unit(110, rpx);
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
</style>