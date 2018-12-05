<template>
  <div>
    <cityheader></cityheader>
    <citysearch></citysearch>
    <citylist :cities="cities"></citylist>
  </div>
</template>

<script>
import cityheader from './components/cityheader'
import citysearch from './components/citysearch'
import citylist from './components/citylist'
import axios from 'axios'
export default {
  name: 'city',
  data () {
    return {
      cities: {}
    }
  },
  components: {
    cityheader,
    citysearch,
    citylist
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
    }
  },
  mounted () {
    this.getInfor()
  }
}
</script>

<style>
</style>
