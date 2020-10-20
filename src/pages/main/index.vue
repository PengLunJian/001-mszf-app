<template>
    <view class="container">
        <tab-content :tabIndex="tabIndex"/>
        <tab-bar :tabIndex="tabIndex" @onChange="onHandleChange"/>
    </view>
</template>

<script type="text/ecmascript-6">
    import mixins from '../../mixins';
    import TabBar from "./components/tab-bar/tab-bar";
    import TabContent from "./components/tab-content/tab-content";
    import * as $controller from './controller';

    export default {
        components: {
            TabContent,
            TabBar
        },
        data() {
            return {
                tabIndex: 0,
                isScroll: true
            }
        },
        mixins: [mixins],
        computed: $controller.states,
        methods: $controller.actions,
        onLoad() {
        }
    }
</script>

<style lang="less">
    @import "../../assets/less/common";

    .container {
        min-height: 100vh;
    }
</style>
