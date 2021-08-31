import Vue from 'vue'
import VueRouter from 'vue-router'
import Berita from '../views/Berita.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Berita',
    component: Berita
  },
]

const router = new VueRouter({
  routes
})

export default router
