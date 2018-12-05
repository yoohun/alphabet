<template>
  <div>
    <cityheader></cityheader>
    <citysearch></citysearch>
    <citylist :cities="cities" :letter="letter"></citylist>
    <alphabet :cities="cities" @change="changeLetter" @status="changeStatus"></alphabet>
    <alphabetletter :letter="letter" :letterStatus="letterStatus"></alphabetletter>
  </div>
</template>

<script>
import cityheader from './components/cityheader'
import citysearch from './components/citysearch'
import citylist from './components/citylist'
import alphabet from './components/alphabet'
import alphabetletter from './components/alphabetletter'
import axios from 'axios'
export default {
  name: 'city',
  data () {
    return {
      cities: {},
      letter: '',
      letterStatus: false
    }
  },
  components: {
    cityheader,
    citysearch,
    citylist,
    alphabet,
    alphabetletter
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
    },
    changeStatus (bool) {
      this.letterStatus = bool
    }
  },
  mounted () {
    this.getInfor()
  }
}
</script>

<style>
</style>
