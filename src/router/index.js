import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Resultado from '@/components/Resultado'
import pilaresEvaluacion from '@/components/pilaresEvaluacion'
import Mapa from '@/components/Mapa'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/resultado',
      name: 'Resultado',
      component: Resultado
    },
    {
      path: '/pilaresEvaluacion',
      name: 'pilaresEvaluacion',
      component: pilaresEvaluacion
    },
    {
      path: '/Mapa',
      name: 'Mapa',
      component: Mapa
    }
  ],
  mode: 'history'
})
