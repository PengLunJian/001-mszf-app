<template>
  <view class="tab-content">
    <view class="home" v-if="tabIndex===0">1</view>
    <view class="list" v-if="tabIndex===1">2</view>
    <view class="mine" v-if="tabIndex===2">3</view>
  </view>
</template>

<script type="text/ecmascript-6">

  export default {
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