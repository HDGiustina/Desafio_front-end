import { createRouter, createWebHistory } from 'vue-router'
import Cadastro from '../views/Cadastro.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'cadastro',
      component: Cadastro
    },
    {
      path: '/conteudo',
      name: 'conteudo',
      component: () => import('../views/Conteudo.vue')
    }
  ]
})

export default router
