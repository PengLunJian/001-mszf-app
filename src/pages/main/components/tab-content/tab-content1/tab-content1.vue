<template>
    <view class="tab-content1">
        <banner/>
        <navigation/>
        <house title="租房推荐"/>
        <house title="二手房推荐"/>
        <house title="新房推荐"/>
    </view>
</template>

<script type="text/ecmascript-6">
    import Banner from "./banner/banner";
    import Navigation from "./navigation/navigation";
    import House from "./house/house";

    export default {
        components: {
            House,
            Navigation,
            Banner
        },
        name: "tab-content1",
        data() {
            return {}
        },
        props: {},
        methods: {},
        created() {
        }
    }
</script>

<style lang="less">
    @import "../../../../../assets/less/common";

</style>