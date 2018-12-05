<template>
  <div class="letterDiv">
    <div class="letter" v-show="letterStatus">{{letter}}</div>
  </div>
</template>

<script>
export default {
  name: 'alphabetletter',
  props: {
    letter: String,
    letterStatus: Boolean
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../assets/style/varibles.styl'
  .letter
    position absolute
    top 50%
    left 50%
    width 1.4rem
    line-height 1.4rem
    text-align center
    margin-top -.7rem
    margin-left -.7rem
    background $bgColor
    border-radius .16rem
    font-size .6rem
    color white
</style>
