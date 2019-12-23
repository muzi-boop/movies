import Vue from 'vue'
import VueRouter from 'vue-router'

// import Index from '../components/index.vue'
// import Sub from '../components/sub.vue'
import Home from "../views/Home"

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
