<template>
    <view class="tab-content3">
        <user/>
    </view>
</template>

<script type="text/ecmascript-6">

    import User from "./user/user";

    export default {
        components: {User},
        name: "tab-content3",
        data() {
            return {
                url: $config.DEFAULT_USER,
            }
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