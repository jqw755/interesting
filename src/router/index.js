import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import home from '@/components/index'
import search from '@/components/search'
import movieDetail from '@/components/movieDetail'
import my from '@/components/my'

Vue.use(Router)
Vue.use(VueResource);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: home
    },
    {
      path: '/search',
      component: search,
      beforeEnter(from, to, next){
        next(vm => {
          const b = confirm('are you sure ?');
          if (b !== true) {
            return false;
          }
        })
      }
    },
    {
      path: '/movieDetail',
      component: movieDetail
    },
    {
      path: '/my',
      component: my,

    },
    {
      path:'*',
      redirect:'/'
    }
  ]
})
