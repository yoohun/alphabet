<template>
  <div class="citylist" ref="wrapper">
    <div>
      <div class="area" v-for="(item, key) of cities" :key="key">
        <div class="cityIndex">{{key}}</div>
        <div class="cityName border-bottom" v-for="itemlist of item" :key="itemlist.id" @click="clickLetter(itemlist.name)">{{itemlist.name}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'citylist',
  props: {
    cities: Object
  },
  methods: {
    clickLetter (name) {
      console.log(name)
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true
    })
    console.log(this.cities)
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../assets/style/varibles.styl'
  .border-topbottom
    &:before
      border-color: #ccc
    &:after
      border-color: #ccc
  .border-bottom
    &:before
      border-color: #ccc
  .citylist
    position absolute
    top 1.44rem
    left 0
    right 0
    bottom 0
    overflow hidden
    .cityIndex
      line-height .5rem
      background #e0e0e0
      color #000000
      padding 0 .2rem
      font-size .32rem
    .cityName
      padding 0 .2rem
      line-height .6rem
      font-size .3rem
</style>
