<template>
  <div class="cityheader">
    城市选择
    <div class="iconfont headerback">&#xe624;</div>
  </div>
</template>

<script>
export default {
  name: 'cityheader'
}
</script>

<style lang="stylus" scoped>

@import  '../../../assets/style/varibles.styl'
  .cityheader
    background $bgColor
    color white
    line-height $headerHeight
    text-align center
    position relative
    font-size .34rem
    .headerback
      width 1rem
      font-size .34rem
      text-align center
      line-height $headerHeight
      position absolute
      left 0
      top 0
</style>
