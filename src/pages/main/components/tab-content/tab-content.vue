<template>
    <view class="tab-content">
        <tab-content1 v-show="tabIndex===0"/>
        <tab-content2 v-show="tabIndex===1"/>
        <tab-content3 v-show="tabIndex===2"/>
    </view>
</template>

<script type="text/ecmascript-6">

    import TabContent1 from "./tab-content1/tab-content1";
    import TabContent2 from "./tab-content2/tab-content2";
    import TabContent3 from "./tab-content3/tab-content3";

    export default {
        components: {
            TabContent1,
            TabContent2,
            TabContent3
        },
        name: "tab-content",
        data() {
            return {}
        },
        props: {
            tabIndex: {
                type: Number,
                default: 0
            }
        },
        methods: {},
        created() {
        }
    }
</script>

<style lang="less">
    @import "../../../../assets/less/common";

</style>