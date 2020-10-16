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
                            <loading-more :length="10" :totalCount="100"/>
                        </view>
                    </scroll-view>
                </view>
            </view>
            <view class="footer"></view>
            <view class="modal modal1" :class="{'show':tabIndex===0}">
                <view class="modal-mask" @click="onHandleClose"></view>
                <view class="modal-content">
                    <view class="modal-header"></view>
                    <view class="modal-body">
                        <view class="modal-row row">
                            <view class="modal-col col-4">
                                <view class="btn btn-city">宣城市</view>
                            </view>
                            <view class="modal-col col-8">
                                <scroll-view class="scroll-view" :scroll-y="true">
                                    <view class="btn btn-area active">广德市</view>
                                    <view class="btn btn-area">广德市</view>
                                    <view class="btn btn-area">广德市</view>
                                    <view class="btn btn-area">广德市</view>
                                    <view class="btn btn-area">广德市</view>
                                    <view class="btn btn-area">广德市</view>
                                    <view class="btn btn-area">广德市</view>
                                    <view class="btn btn-area">广德市</view>
                                    <view class="btn btn-area">广德市</view>
                                    <view class="btn btn-area">广德市</view>
                                    <view class="btn btn-area">广德市</view>
                                    <view class="btn btn-area">广德市</view>
                                    <view class="btn btn-area">广德市</view>
                                    <view class="btn btn-area">广德市</view>
                                    <view class="btn btn-area">广德市</view>
                                </scroll-view>
                            </view>
                        </view>
                    </view>
                    <view class="modal-footer">
                        <view class="modal-row row">
                            <view class="modal-col col-4">
                                <view class="btn btn-reset">重置</view>
                            </view>
                            <view class="modal-col col-8">
                                <view class="btn btn-confirm">确定</view>
                            </view>
                        </view>
                    </view>
                </view>
            </view>
            <view class="modal modal2" :class="{'show':tabIndex===1}">
                <view class="modal-mask" @click="onHandleClose"></view>
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
                                            <view class="btn btn-item" :class="{'active':btnItems1.activeIndex===index}"
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
                                            <view class="btn btn-item" :class="{'active':btnItems2.activeIndex===index}"
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
                                            <view class="btn btn-item" :class="{'active':btnItems3.activeIndex===index}"
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
                                            <view class="btn btn-item" :class="{'active':btnItems4.activeIndex===index}"
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
                                            <view class="btn btn-item" :class="{'active':btnItems5.activeIndex===index}"
                                                  @click="onHandleBtnItems(btnItems5,index)">{{item.label}}
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
                                            <view class="btn btn-item" :class="{'active':btnItems6.activeIndex===index}"
                                                  @click="onHandleBtnItems(btnItems6,index)">{{item.label}}
                                            </view>
                                        </view>
                                    </view>
                                    <view class="modal-split"></view>
                                </view>
                            </view>
                            <view class="modal-row row">
                                <view class="modal-col col-12">
                                    <view class="modal-label">{{btnItems7.type}}</view>
                                    <view class="modal-items row">
                                        <view class="modal-item col-3" v-for="(item,index) in btnItems7.items"
                                              :key="index">
                                            <view class="btn btn-item" :class="{'active':btnItems7.activeIndex===index}"
                                                  @click="onHandleBtnItems(btnItems7,index)">{{item.label}}
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
                                <view class="btn btn-reset">重置</view>
                            </view>
                            <view class="modal-col col-8">
                                <view class="btn btn-confirm">确定</view>
                            </view>
                        </view>
                    </view>
                </view>
            </view>
            <view class="modal modal3" :class="{'show':tabIndex===2}">
                <view class="modal-mask" @click="onHandleClose"></view>
                <view class="modal-content">
                    <view class="modal-header"></view>
                    <view class="modal-body">
                        <view class="modal-row row">
                            <view class="modal-col col-12" v-for="(item,index) in btnItems8.items" :key="index">
                                <view class="btn btn-item" :class="{'active':btnItems8.activeIndex===index}"
                                      @click="onHandleBtnItems(btnItems8,index)">{{item.label}}
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
                tabIndex: -1,
                btnItems1: {
                    type: '方式',
                    activeIndex: -1,
                    items: [
                        {
                            label: '整租',
                            value: '整租'
                        },
                        {
                            label: '合租',
                            value: '合租'
                        },
                        {
                            label: '转租',
                            value: '转租'
                        }
                    ],
                    value: ''
                },
                btnItems2: {
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
                    value: ''
                },
                btnItems3: {
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
                    value: ''
                },
                btnItems4: {
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
                    value: ''
                },
                btnItems5: {
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
                    value: ''
                },
                btnItems6: {
                    type: '价格',
                    activeIndex: -1,
                    items: [
                        {
                            label: '1000以下',
                            value: {
                                minPrice: 0,
                                maxPrice: 1000
                            }
                        },
                        {
                            label: '1千-2千',
                            value: {
                                minPrice: 1000,
                                maxPrice: 2000
                            }
                        },
                        {
                            label: '2千-3千',
                            value: {
                                minPrice: 2000,
                                maxPrice: 3000
                            }
                        },
                        {
                            label: '3千-4千',
                            value: {
                                minPrice: 3000,
                                maxPrice: 4000
                            }
                        },
                        {
                            label: '4千-5千',
                            value: {
                                minPrice: 4000,
                                maxPrice: 5000
                            }
                        },
                        {
                            label: '5千-6千',
                            value: {
                                minPrice: 5000,
                                maxPrice: 6000
                            }
                        },
                        {
                            label: '6千-7千',
                            value: {
                                minPrice: 6000,
                                maxPrice: 7000
                            }
                        },
                        {
                            label: '7千-8千',
                            value: {
                                minPrice: 7000,
                                maxPrice: 8000
                            }
                        },
                        {
                            label: '8千-9千',
                            value: {
                                minPrice: 8000,
                                maxPrice: 9000
                            }
                        },
                        {
                            label: '9千-1万',
                            value: {
                                minPrice: 9000,
                                maxPrice: 10000
                            }
                        },
                        {
                            label: '1万以上',
                            value: {
                                minPrice: 10000,
                                maxPrice: 100000000
                            }
                        }
                    ],
                    value: []
                },
                btnItems7: {
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
                    value: []
                },
                btnItems8: {
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
        methods: {
            onHandleClose() {
                this.tabIndex = -1;
                this.isScroll = true;
            },
            onHandleChange(index) {
                const {tabIndex} = this;
                this.isScroll = tabIndex === index ? true : false;
                this.tabIndex = tabIndex === index ? -1 : index;
            },
            onHandleBtnItems(item, index) {
                const {type, activeIndex} = item;
                console.log(type);
                switch (type) {
                    case '方式':
                        this.btnItems1.activeIndex = activeIndex === index ? -1 : index;
                        break;
                    case '户型':
                        this.btnItems2.activeIndex = activeIndex === index ? -1 : index;
                        break;
                    case '装修':
                        this.btnItems3.activeIndex = activeIndex === index ? -1 : index;
                        break;
                    case '朝向':
                        this.btnItems4.activeIndex = activeIndex === index ? -1 : index;
                        break;
                    case '楼层':
                        this.btnItems5.activeIndex = activeIndex === index ? -1 : index;
                        break;
                    case '价格':
                        this.btnItems6.activeIndex = activeIndex === index ? -1 : index;
                        break;
                    case '面积':
                        this.btnItems7.activeIndex = activeIndex === index ? -1 : index;
                        break;
                    case '排序':
                        this.btnItems8.activeIndex = activeIndex === index ? -1 : index;
                        break;
                }
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
