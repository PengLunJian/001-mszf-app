<template>
    <view class="tab-content1">
        <loading :isShow="isLoading"/>
        <error :isShow="isFailure" @refresh="onRefresh"/>
        <view class="tab-context" v-if="isSuccess">
            <banner/>
            <navigation/>
            <house title="租房推荐" :items="isData[0].rows"/>
            <house title="售房推荐" :items="isData[2].rows"/>
            <house title="新房推荐" :items="isData[1].rows"/>
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

    export default {
        components: {
            Loading,
            Error,
            House,
            Navigation,
            Banner
        },
        name: "tab-content1",
        data() {
            return {
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
                isData: state => state.INDEX.isData
            })
        },
        methods: {
            ...mapActions([
                'ajaxSelectIndex'
            ]),
            exeAjaxSelectIndex() {
                const params = this.getParams();
                this.ajaxSelectIndex(params)
                    .then((res) => {
                        res = res || {};
                        const {data, success} = res;
                        console.log(data);
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
                const {pageSize, pageIndex} = this;
                return {
                    pageSize,
                    pageIndex,
                    city: '宣城市'
                }
            }
        },
        created() {
            this.exeAjaxSelectIndex();
        }
    }
</script>

<style lang="less">
    @import "../../../../../assets/less/common";

</style>