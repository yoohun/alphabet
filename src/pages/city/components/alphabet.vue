<template>
  <ul class="list">
    <li class="alphabetItem" v-for="(item, key) of cities" :key="key" @click="clickLetter(key)">{{key}}</li>
  </ul>
</template>

<script>
export default {
  name: 'alphabet',
  props: {
    cities: Object
  },
  methods: {
    clickLetter (letter) {
      this.$emit('change', letter)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../assets/style/varibles.styl'
.list
  display flex
  flex-direction column
  justify-content center
  position fixed
  right 0
  top 0
  bottom 0
  z-index 10
  .alphabetItem
    color $bgColor
    text-align center
    line-height .36rem
    font-size .28rem
</style>
