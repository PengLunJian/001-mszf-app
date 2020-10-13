<template>
    <view class="tab-content3">
        <user/>
        <list/>
    </view>
</template>

<script type="text/ecmascript-6">

    import User from "./user/user";
    import List from "./list/list";

    export default {
        components: {
            List,
            User
        },
        name: "tab-content3",
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