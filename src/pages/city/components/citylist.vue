<template>
  <div class="citylist" ref="wrapper">
    <div>
      <div class="area" v-for="(item, key) of cities" :key="key" :ref="key">
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
    cities: Object,
    letter: String
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
  },
  watch: {
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../assets/style/varibles.styl'
  .border-topbottom
    &:before
      border-color: #bababa
    &:after
      border-color: #bababa
  .border-bottom
    &:before
      border-color: #bababa
  .citylist
    position absolute
    top 1.44rem
    left 0
    right 0
    bottom 0
    overflow hidden
    .cityIndex
      line-height .54rem
      background #dfdfdf
      color #4c4c4c
      padding 0 .2rem
      font-size .3rem
    .cityName
      padding 0 .2rem
      line-height .7rem
      font-size .3rem
</style>
