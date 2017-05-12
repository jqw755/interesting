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
      component: home,
      meta: {
        keepAlive: true // 需要被缓存   http://www.jianshu.com/p/0b0222954483  解决数据缓存问题
      }
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
      },
      meta: {
        keepAlive: false
      }
    },
    {
      path: '/movieDetail',
      component: movieDetail
    },
    {
      path: '/my',
      component: my,
      meta: {
        keepAlive: false
      }

    },
    {
      path:'*',
      redirect:'/'
    }
  ]
})
