<template>
    <view class="container">
        <view class="content">
            <view class="header">
                <nav-bar title="房源列表"/>
                <tab-bar :tabIndex="tabIndex" @onChange="onHandleChange"/>
            </view>
            <view class="body">
                <loading :isShow="isLoading&&!isHouse.rows.length"/>
                <error :isShow="isFailure&&!isHouse.rows.length" @refresh="onRefresh"/>
                <empty :isShow="isSuccess&&!isHouse.rows.length"/>
                <view class="context fade-in" v-if="isHouse.rows.length">
                    <scroll-view class="scroll-view"
                                 :scroll-y="isScroll"
                                 @scrolltolower="onHandleScrollToLower">
                        <view class="scroll-content">
                            <view class="items">
                                <house-item v-for="(item,index) in isHouse.rows" :item="item" :key="index"/>
                            </view>
                            <loading-more :length="isHouse.rows.length" :totalCount="isHouse.totalCount"/>
                        </view>
                    </scroll-view>
                </view>
            </view>
            <view class="footer"></view>
            <view class="modal modal1" :class="{'show':tabIndex===0}">
                <view class="modal-mask" @click="onHandleModalClose"></view>
                <view class="modal-content">
                    <view class="modal-header"></view>
                    <view class="modal-body">
                        <view class="modal-row row">
                            <view class="modal-col col-4">
                                <view class="btn btn-city">{{isCitys.fullname}}</view>
                            </view>
                            <view class="modal-col col-8">
                                <scroll-view class="scroll-view" :scroll-y="true">
                                    <view class="btn btn-area" :class="{'active':btnItems0.activeIndex===index}"
                                          v-for="(item,index) in btnItems0.items" :key="index"
                                          @click="onHandleBtnItems(btnItems0,index)">{{item.fullname}}
                                    </view>
                                </scroll-view>
                            </view>
                        </view>
                    </view>
                    <view class="modal-footer">
                        <view class="modal-row row">
                            <view class="modal-col col-4">
                                <view class="btn btn-reset" @click="onHandleReset">重置</view>
                            </view>
                            <view class="modal-col col-8">
                                <view class="btn btn-confirm" @click="onHandleConfirm">确定</view>
                            </view>
                        </view>
                    </view>
                </view>
            </view>
            <view class="modal modal2" :class="{'show':tabIndex===1}">
                <view class="modal-mask" @click="onHandleModalClose"></view>
                <view class="modal-content">
                    <view class="modal-header"></view>
                    <view class="modal-body">
                        <scroll-view class="scroll-view" :scroll-y="true">
                            <view class="modal-row row">
                                <view class="modal-col col-12">
                                    <view class="modal-label">{{btnItems1.type}}</view>
                                    <view class="modal-items row">
                                        <view class="modal-item col-3" v-for="(item,index) in btnItems1.items"
                                              :key="index">
                                            <view class="btn-item" :class="{'active':btnItems1.activeIndex===index}"
                                                  @click="onHandleBtnItems(btnItems1,index)">{{item.label}}
                                            </view>
                                        </view>
                                    </view>
                                    <view class="modal-split"></view>
                                </view>
                            </view>
                            <view class="modal-row row">
                                <view class="modal-col col-12">
                                    <view class="modal-label">{{btnItems2.type}}</view>
                                    <view class="modal-items row">
                                        <view class="modal-item col-3" v-for="(item,index) in btnItems2.items"
                                              :key="index">
                                            <view class="btn-item" :class="{'active':btnItems2.activeIndex===index}"
                                                  @click="onHandleBtnItems(btnItems2,index)">{{item.label}}
                                            </view>
                                        </view>
                                    </view>
                                    <view class="modal-split"></view>
                                </view>
                            </view>
                            <view class="modal-row row">
                                <view class="modal-col col-12">
                                    <view class="modal-label">{{btnItems3.type}}</view>
                                    <view class="modal-items row">
                                        <view class="modal-item col-3" v-for="(item,index) in btnItems3.items"
                                              :key="index">
                                            <view class="btn-item" :class="{'active':btnItems3.activeIndex===index}"
                                                  @click="onHandleBtnItems(btnItems3,index)">{{item.label}}
                                            </view>
                                        </view>
                                    </view>
                                    <view class="modal-split"></view>
                                </view>
                            </view>
                            <view class="modal-row row">
                                <view class="modal-col col-12">
                                    <view class="modal-label">{{btnItems4.type}}</view>
                                    <view class="modal-items row">
                                        <view class="modal-item col-3" v-for="(item,index) in btnItems4.items"
                                              :key="index">
                                            <view class="btn-item" :class="{'active':btnItems4.activeIndex===index}"
                                                  @click="onHandleBtnItems(btnItems4,index)">{{item.label}}
                                            </view>
                                        </view>
                                    </view>
                                    <view class="modal-split"></view>
                                </view>
                            </view>
                            <view class="modal-row row">
                                <view class="modal-col col-12">
                                    <view class="modal-label">{{btnItems5.type}}</view>
                                    <view class="modal-items row">
                                        <view class="modal-item col-3" v-for="(item,index) in btnItems5.items"
                                              :key="index">
                                            <view class="btn-item" :class="{'active':btnItems5.activeIndex===index}"
                                                  @click="onHandleBtnItems(btnItems5,index)">{{item.label}}
                                            </view>
                                        </view>
                                    </view>
                                    <view class="modal-slider">
                                        <view class="modal-row row">
                                            <view class="modal-col col-6">
                                                <view class="modal-label min-label">{{minPrice}}</view>
                                            </view>
                                            <view class="modal-col col-6">
                                                <view class="modal-label max-label">{{maxPrice}}</view>
                                            </view>
                                            <view class="modal-col col-12">
                                                <range-slider :width="690" :bar-height="8" :step="10"
                                                              :values="priceValue" :min="0" :max="1000"
                                                              @rangechange="onHandleChangePrice"/>
                                            </view>
                                        </view>
                                    </view>
                                    <view class="modal-split"></view>
                                </view>
                            </view>
                            <view class="modal-row row">
                                <view class="modal-col col-12">
                                    <view class="modal-label">{{btnItems6.type}}</view>
                                    <view class="modal-items row">
                                        <view class="modal-item col-3" v-for="(item,index) in btnItems6.items"
                                              :key="index">
                                            <view class="btn-item" :class="{'active':btnItems6.activeIndex===index}"
                                                  @click="onHandleBtnItems(btnItems6,index)">{{item.label}}
                                            </view>
                                        </view>
                                    </view>
                                    <view class="modal-slider">
                                        <view class="modal-row row">
                                            <view class="modal-col col-6">
                                                <view class="modal-label min-label">{{minAreas}}</view>
                                            </view>
                                            <view class="modal-col col-6">
                                                <view class="modal-label max-label">{{maxAreas}}</view>
                                            </view>
                                            <view class="modal-col col-12">
                                                <range-slider :width="690" :bar-height="8" :step="5"
                                                              :values="areasValue" :min="0" :max="500"
                                                              @rangechange="onHandleChangeAreas"/>
                                            </view>
                                        </view>
                                    </view>
                                    <view class="modal-split"></view>
                                </view>
                            </view>
                        </scroll-view>
                    </view>
                    <view class="modal-footer">
                        <view class="modal-row row">
                            <view class="modal-col col-4">
                                <view class="btn btn-reset" @click="onHandleReset">重置</view>
                            </view>
                            <view class="modal-col col-8">
                                <view class="btn btn-confirm" @click="onHandleConfirm">确定</view>
                            </view>
                        </view>
                    </view>
                </view>
            </view>
            <view class="modal modal3" :class="{'show':tabIndex===2}">
                <view class="modal-mask" @click="onHandleModalClose"></view>
                <view class="modal-content">
                    <view class="modal-header"></view>
                    <view class="modal-body">
                        <view class="modal-row row">
                            <view class="modal-col col-12" v-for="(item,index) in btnItems7.items" :key="index">
                                <view class="btn btn-item" :class="{'active':btnItems7.activeIndex===index}"
                                      @click="onHandleBtnItems(btnItems7,index)">{{item.label}}
                                </view>
                            </view>
                        </view>
                    </view>
                    <view class="modal-footer"></view>
                </view>
            </view>
        </view>
    </view>
</template>

<script type="text/ecmascript-6">
    import mixins from '../../../mixins';
    import TabBar from "../components/tab-bar/tab-bar";
    import NavBar from "../../../components/nav-bar/nav-bar";
    import Loading from "../../../components/loading/loading";
    import HouseItem from "../../../components/house-item/house-item";
    import LoadingMore from "../../../components/loading-more/loading-more";
    import RangeSlider from "../../../components/range-slider/range-slider";
    import Error from "../../../components/error/error";
    import Empty from "../../../components/empty/empty";
    import * as $controller from './controller';

    export default {
        components: {
            Empty,
            Error,
            Loading,
            TabBar,
            LoadingMore,
            HouseItem,
            NavBar,
            RangeSlider
        },
        mixins: [mixins],
        data() {
            return {
                isScroll: true,
                tabIndex: -1,
                pageIndex: 1,
                pageSize: 10,
                type: 2,
                minPrice: '价格',
                maxPrice: '不限',
                minAreas: '面积',
                maxAreas: '不限',
                areasValue: [0, 500],
                priceValue: [0, 1000],
                btnItems0: {
                    type: '区域',
                    activeIndex: -1,
                    items: [],
                    value: null
                },
                btnItems1: {
                    type: '户型',
                    activeIndex: -1,
                    items: [
                        {
                            label: '一室',
                            value: '1室'
                        },
                        {
                            label: '二室',
                            value: '2室'
                        },
                        {
                            label: '三室',
                            value: '3室'
                        },
                        {
                            label: '四室',
                            value: '4室'
                        },
                        {
                            label: '五室',
                            value: '5室'
                        },
                        {
                            label: '五室以上',
                            value: '5室+'
                        }
                    ],
                    value: null
                },
                btnItems2: {
                    type: '装修',
                    activeIndex: -1,
                    items: [
                        {
                            label: '毛坯',
                            value: '毛坯'
                        },
                        {
                            label: '简装',
                            value: '简装'
                        },
                        {
                            label: '精装',
                            value: '精装'
                        },
                        {
                            label: '豪装',
                            value: '豪装'
                        },
                        {
                            label: '其他',
                            value: '其他'
                        }
                    ],
                    value: null
                },
                btnItems3: {
                    type: '朝向',
                    activeIndex: -1,
                    items: [
                        {
                            label: '朝东',
                            value: '朝东'
                        },
                        {
                            label: '朝南',
                            value: '朝南'
                        },
                        {
                            label: '朝北',
                            value: '朝北'
                        },
                        {
                            label: '朝西',
                            value: '朝西'
                        },
                        {
                            label: '南北',
                            value: '南北'
                        }
                    ],
                    value: null
                },
                btnItems4: {
                    type: '楼层',
                    activeIndex: -1,
                    items: [
                        {
                            label: '底层',
                            value: '底层'
                        },
                        {
                            label: '低楼层',
                            value: '低楼层'
                        },
                        {
                            label: '中楼层',
                            value: '中楼层'
                        },
                        {
                            label: '高楼层',
                            value: '高楼层'
                        },
                        {
                            label: '顶层',
                            value: '顶层'
                        }
                    ],
                    value: null
                },
                btnItems5: {
                    type: '价格',
                    activeIndex: -1,
                    items: [
                        {
                            label: '100万以下',
                            value: {
                                minTotalPrice: 0,
                                maxTotalPrice: 100
                            }
                        },
                        {
                            label: '100-200万',
                            value: {
                                minTotalPrice: 100,
                                maxTotalPrice: 200
                            }
                        },
                        {
                            label: '200-300万',
                            value: {
                                minTotalPrice: 200,
                                maxTotalPrice: 300
                            }
                        },
                        {
                            label: '300-400万',
                            value: {
                                minTotalPrice: 300,
                                maxTotalPrice: 400
                            }
                        },
                        {
                            label: '400-500万',
                            value: {
                                minTotalPrice: 400,
                                maxTotalPrice: 500
                            }
                        },
                        {
                            label: '500-600万',
                            value: {
                                minTotalPrice: 500,
                                maxTotalPrice: 600
                            }
                        },
                        {
                            label: '600-700万',
                            value: {
                                minTotalPrice: 600,
                                maxTotalPrice: 700
                            }
                        },
                        {
                            label: '700-800万',
                            value: {
                                minTotalPrice: 700,
                                maxTotalPrice: 800
                            }
                        },
                        {
                            label: '800-900万',
                            value: {
                                minTotalPrice: 800,
                                maxTotalPrice: 900
                            }
                        },
                        {
                            label: '900-1000万',
                            value: {
                                minTotalPrice: 900,
                                maxTotalPrice: 1000
                            }
                        },
                        {
                            label: '1000万以上',
                            value: {
                                minTotalPrice: 1000,
                                maxTotalPrice: 100000000
                            }
                        }
                    ],
                    value: null
                },
                btnItems6: {
                    type: '面积',
                    activeIndex: -1,
                    items: [
                        {
                            label: '50m²以下',
                            value: {
                                minArea: 0,
                                maxArea: 50
                            }
                        },
                        {
                            label: '50-70m²',
                            value: {
                                minArea: 50,
                                maxArea: 70
                            }
                        },
                        {
                            label: '70-90m²',
                            value: {
                                minArea: 70,
                                maxArea: 90
                            }
                        },
                        {
                            label: '90-110m²',
                            value: {
                                minArea: 90,
                                maxArea: 110
                            }
                        },
                        {
                            label: '110-130m²',
                            value: {
                                minArea: 110,
                                maxArea: 130
                            }
                        },
                        {
                            label: '130-150m²',
                            value: {
                                minArea: 130,
                                maxArea: 150
                            }
                        },
                        {
                            label: '150-200m²',
                            value: {
                                minArea: 150,
                                maxArea: 200
                            }
                        },
                        {
                            label: '200-300m²',
                            value: {
                                minArea: 200,
                                maxArea: 300
                            }
                        },
                        {
                            label: '300-500m²',
                            value: {
                                minArea: 300,
                                maxArea: 500
                            }
                        },
                        {
                            label: '500m²以上',
                            value: {
                                minArea: 500,
                                maxArea: 100000000
                            }
                        }
                    ],
                    value: null
                },
                btnItems7: {
                    type: '排序',
                    activeIndex: -1,
                    items: [
                        {
                            label: '默认排序',
                            value: null
                        },
                        {
                            label: '价格从低到高',
                            value: {
                                sortKey: 'price',
                                sortValue: 'asc'
                            }
                        },
                        {
                            label: '价格从高到底',
                            value: {
                                sortKey: 'price',
                                sortValue: 'desc'
                            }
                        },
                        {
                            label: '面积从小到大',
                            value: {
                                sortKey: 'floorArea',
                                sortValue: 'asc'
                            }
                        },
                        {
                            label: '面积从大到小',
                            value: {
                                sortKey: 'floorArea',
                                sortValue: 'desc'
                            }
                        },
                        {
                            label: '最新发布时间',
                            value: {
                                sortKey: 'createTime',
                                sortValue: 'desc'
                            }
                        }
                    ],
                    value: null
                },
            }
        },
        computed: $controller.states,
        methods: $controller.actions,
        onLoad() {
            this.btnItems0.items = this.isAreas;
            this.selectHouseReplace();
            this.exeAjaxSelectHouse();
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
                    padding-top: @top2;
                    .scroll-view {
                        height: 100%;
                        .scroll-content {
                        }
                    }
                }
            }
            .footer {
            }
            .modal {
                .modal-mask {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    z-index: 999;
                    opacity: 0;
                    visibility: hidden;
                    background-color: @mask;
                    transition: all 300ms ease-out;
                }
                .modal-content {
                    position: fixed;
                    top: 0;
                    left: 0;
                    z-index: 1000;
                    width: 100%;
                    height: unit(850, rpx);
                    visibility: hidden;
                    padding: @top2 0 unit(100, rpx);
                    transform: translateY(unit(-850, rpx));
                    box-shadow: 0 0 15px @boxShadow15;
                    transition: all 450ms ease-out;
                    background-color: @white;
                    .modal-header {
                    }
                    .modal-body {
                        height: 100%;
                        .scroll-view {
                            height: 100%;
                        }
                    }
                    .modal-footer {
                        .btn {
                            height: unit(100, rpx);
                            line-height: unit(100, rpx);
                            font-size: @fontSize32;
                            letter-spacing: 1px;
                            text-align: center;
                            color: @white;
                            &.btn-reset {
                                border-top: 0.5px solid @borderColor1;
                                background-color: @white;
                                color: @fontColor2;
                            }
                            &.btn-confirm {
                                background: -webkit-linear-gradient(left, #ffcc00, @theme);
                            }
                        }
                    }
                }
                &.modal1 {
                    .modal-row {
                        height: 100%;
                        .modal-col {
                            height: 100%;
                            line-height: unit(90, rpx);
                            font-size: @fontSize30;
                            letter-spacing: 0.5px;
                            &.col-4 {
                                .btn-city {
                                    text-align: center;
                                    &.active {
                                        color: @theme;
                                    }
                                }
                            }
                            &.col-8 {
                                background-color: @bgColor;
                                .btn-area {
                                    padding: 0 unit(40, rpx);
                                    &.active {
                                        color: @theme;
                                    }
                                }
                            }
                        }
                    }
                }
                &.modal2 {
                    .modal-body {
                        .modal-row {
                            padding: unit(15, rpx) unit(15, rpx) 0;
                            .modal-col {
                                .modal-label {
                                    padding: unit(15, rpx);
                                    line-height: unit(32, rpx);
                                    font-size: @fontSize28;
                                    color: @fontColor2;
                                }
                                .modal-items {
                                    .modal-item {
                                        padding: unit(15, rpx);
                                        .btn-item {
                                            overflow: hidden;
                                            height: unit(60, rpx);
                                            line-height: unit(60, rpx);
                                            border-radius: unit(60, rpx);
                                            background-color: @bgColor;
                                            font-size: @fontSize24;
                                            text-align: center;
                                            color: @fontColor3;
                                            &.active {
                                                background-color: @tagColor;
                                                color: @theme;
                                            }
                                        }
                                    }
                                }
                                .modal-split {
                                    padding: 0 unit(15, rpx);
                                    margin-top: unit(15, rpx);
                                    &:after {
                                        content: '';
                                        display: block;
                                        border-bottom: 0.5px solid @borderColor1;
                                    }
                                }
                                .modal-slider {
                                    .modal-row {
                                        .modal-col {
                                            .modal-label {
                                                padding: unit(15, rpx) 0;
                                                &.max-label {
                                                    text-align: right;
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            &:last-child {
                                .modal-split {
                                    &:after {
                                        display: none;
                                    }
                                }
                            }
                        }
                    }
                }
                &.modal3 {
                    .modal-content {
                        height: calc(@top2 + unit(600, rpx));
                        transform: translateY(calc(unit(-600, rpx) - @top2));
                        .modal-row {
                            .modal-col {
                                .btn-item {
                                    height: unit(100, rpx);
                                    line-height: unit(100, rpx);
                                    border-bottom: 0.5px solid @borderColor1;
                                    font-size: @fontSize30;
                                    letter-spacing: 0.5px;
                                    text-align: center;
                                    &.active {
                                        color: @theme;
                                    }
                                }
                                &:last-child {
                                    .btn-item {
                                        border: none;
                                    }
                                }
                            }
                        }
                    }
                }
                &.show {
                    .modal-mask {
                        opacity: 1;
                        visibility: visible;
                    }
                    .modal-content {
                        visibility: visible;
                        transform: translateY(0px);
                    }
                }
            }
        }
    }
</style>
