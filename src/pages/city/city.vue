<template>
  <div>
    <cityheader></cityheader>
    <citysearch></citysearch>
  </div>
</template>

<script>
import cityheader from './components/cityheader'
import citysearch from './components/citysearch'
export default {
  name: 'city',
  data () {
    return {
      cities: {}
    }
  },
  components: {
    cityheader,
    citysearch
  }
}
</script>

<style>
</style>
