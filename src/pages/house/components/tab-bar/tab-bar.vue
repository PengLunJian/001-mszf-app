<template>
    <view class="tab-bar">
        <view class="tab-row row"
              :class="{'active':activeIndex===index}"
              v-for="(item,index) in items"
              @click="onHandleChange(index)">
            <view class="tab-col col-4">
                <view class="tab-text">{{item.label}}</view>
            </view>
        </view>
    </view>
</template>

<script type="text/ecmascript-6">
    export default {
        name: "tab-bar",
        data() {
            return {
                activeIndex: -1,
                items: [
                    {
                        label: '区域',
                        isShow: false
                    },
                    {
                        label: '筛选',
                        isShow: false
                    },
                    {
                        label: '排序',
                        isShow: false
                    }
                ]
            }
        },
        props: {
            tabIndex: {
                type: Number,
                default: 0
            }
        },
        methods: {
            onHandleChange(index) {
                this.$emit('onChange', index);
            }
        },
        created() {
        }
    }
</script>

<style lang="less">
    @import "../../../../assets/less/common";

    .tab-bar {
        position: fixed;
        top: 65px;
        left: 0;
        z-index: 999;
        width: 100%;
        height: unit(80, rpx);
        box-shadow: 0 0 15px @boxShadow05;
        background-color: @white;
        font-size: @fontSize26;
        text-align: center;
        .tab-row {
            .tab-col {
                width: 33.333%;
                padding: unit(20, rpx) 0;
                .tab-text {
                    height: unit(40, rpx);
                    line-height: unit(40, rpx);
                }
                &.active {
                    color: @theme;
                }
            }
        }
    }
</style>