<template>
  <ul class="list">
    <li class="alphabetItem" v-for="item of letters" :key="item" :ref="item" @click="clickLetter(item)" @touchstart="letterStart" @touchmove="letterMove" @touchend="letterEnd">{{item}}</li>
  </ul>
</template>

<script>
export default {
  name: 'alphabet',
  props: {
    cities: Object
  },
  data () {
    return {
      letterStatus: false,
      startY: 0,
      timer: null
    }
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  methods: {
    clickLetter (letter) {
      this.$emit('change', letter)
    },
    letterStart () {
      this.letterStatus = true
      this.$emit('status', true)
    },
    letterMove (e) {
      if (this.letterStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const startY = this.$refs['A'][0].offsetTop
          const touchY = e.touches[0].clientY
          const index = Math.floor((touchY - startY) / 18)
          this.$emit('change', this.letters[index])
        }, 16)
      }
    },
    letterEnd () {
      this.letterStatus = false
      this.$emit('status', false)
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
  position absolute
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
