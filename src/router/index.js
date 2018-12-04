import Vue from 'vue'
import Router from 'vue-router'
import fastClick from 'fastclick'
import city from '@/pages/city/city'
import '../assets/style/reset.css'
import '../assets/style/border.css'
import '../assets/style/iconfont.css'

Vue.use(Router)
fastClick.attach(document.body)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'city',
      component: city
    }
  ]
})
