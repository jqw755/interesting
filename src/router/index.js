import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import App from '../App.vue'
import home from '@/components/index'
import search from '@/components/search'
import movieDetail from '@/components/movieDetail'
import my from '@/components/my'

Vue.use(Router)
Vue.use(VueResource);

export default new Router({
  routes: [
    {
      path: '/App',
      component: App
    },
    {
      path:'/home',
      component: home
    },
    {
      path:'/search',
      component: search
    },
    {
      path:'/movieDetail',
      component: movieDetail
    },
    {
      path:'/my',
      component: my
    }
  ]
})
