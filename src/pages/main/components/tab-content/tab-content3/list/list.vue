<template>
    <view class="module">
        <view class="module-content">
            <view class="module-header"></view>
            <view class="module-body"></view>
            <view class="module-footer"></view>
        </view>
    </view>
</template>

<script type="text/ecmascript-6">

    export default {
        components: {},
        name: "list",
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
    @import "../../../../../../assets/less/common";

    .module {
        .module-content {
            .module-header {}
            .module-body {}
            .module-footer {
            }
        }
    }
</style>