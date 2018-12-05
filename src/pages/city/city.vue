<template>
  <div>
    <cityheader></cityheader>
    <citysearch></citysearch>
    <citylist :cities="cities" :letter="letter"></citylist>
    <alphabet :cities="cities" @change="changeLetter"></alphabet>
  </div>
</template>

<script>
import cityheader from './components/cityheader'
import citysearch from './components/citysearch'
import citylist from './components/citylist'
import alphabet from './components/alphabet'
import axios from 'axios'
export default {
  name: 'city',
  data () {
    return {
      cities: {},
      letter: ''
    }
  },
  components: {
    cityheader,
    citysearch,
    citylist,
    alphabet
  },
  methods: {
    getInfor () {
      axios.get('/api/city.json')
        .then(this.showInfor)
    },
    showInfor (res) {
      res = res.data
      if (res.ret && res.data) {
        this.cities = res.data.cities
      }
    },
    changeLetter (letter) {
      this.letter = letter
    }
  },
  mounted () {
    this.getInfor()
  }
}
</script>

<style>
</style>
