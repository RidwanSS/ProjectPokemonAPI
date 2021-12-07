import Vue from 'vue'
import Router from 'vue-router'
import PokemonAPI from '@/components/PokemonAPI'
import Attrapez from '@/components/Catch'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PokemonAPI',
      component: PokemonAPI
    },
    {
      path: '/catch',
      name: 'Attrapez',
      component: Attrapez
    },
  ]
})
