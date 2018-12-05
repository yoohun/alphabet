<template>
  <div>
    <div class="search">
      <input type="text" placeholder="输入相应的城市或拼音" class="searchput" v-model="cityname">
    </div>
  </div>
</template>

<script>
export default {
  name: 'citysearch',
  data () {
    return {
      cityname: ''
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../assets/style/varibles.styl'
  .search
    height .64rem
    background $bgColor
    padding-left .2rem
    padding-right  .2rem
    .searchput
      width 100%
      height .58rem
      line-height .58rem
      text-align center
      border-radius .05rem
      padding 0 .1rem
      box-sizing border-box
      color #666
</style>
