<template>
    <view class="tab-content2">
        <waiting/>
    </view>
</template>

<script type="text/ecmascript-6">

    import Waiting from "../../../../../components/waiting/waiting";

    export default {
        components: {Waiting},
        name: "tab-content2",
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