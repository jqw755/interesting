<template>
  <div id="app" :class="{trans:trans}">

    <div class="menu" @click="showMenu">
      <span v-for="i in 3" class="line"></span>
    </div>
    <div class="menuMask" v-if="trans" @click="closeMenu"></div>

    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>


    <!--页脚-->
    <mt-tabbar fixed class="tabbar" v-model="selected">
      <mt-tab-item id="_home" :class="activeClass">
        <img slot="icon" src="./assets/images/home.png">
        <router-link to="/">首页</router-link>
      </mt-tab-item>
      <mt-tab-item id="_search" :class="activeClass">
        <img slot="icon" src="./assets/images/search.png">
        <router-link to="/search">发现</router-link>
      </mt-tab-item>
      <mt-tab-item id="my" :class="activeClass">
        <img slot="icon" src="./assets/images/my.png">
        <router-link to="/my">我的</router-link>
      </mt-tab-item>
    </mt-tabbar>

  </div>
</template>

<script>
  import home from './components/index.vue'
  import movieDetail from './components/movieDetail.vue'
  import search from './components/search.vue'
  import my from './components/my.vue'

  export default {
    name: 'App',
    data () {
      return {
        selected: '_home',
        activeClass: 'active1',
        trans: false
      }
    },
    components: {
      home,
      movieDetail,
      search,
      my
    },
    watch: {
      '$route' (to) {
        if (to.path == '/') {
          document.title = '首页';
          this.selected = '/';
          this.activeClass = 'active1';
        } else if (to.path == '/search') {
          document.title = '搜索';
          this.selected = 'search';
          this.activeClass = 'active2';
        } else if (to.path == '/my') {
          document.title = '个人中心';
          this.selected = 'my';
          this.activeClass = 'active3';
        }

      }
    },
    mounted: function () {

    },
    methods: {
      showMenu(){
        this.trans = true;
      },
      closeMenu(){
        this.trans = false;
      }
    }
  }
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    /*-webkit-transition: all 0.6s ease;*/
    /*transition: all 0.6s ease;*/
  }

  html {
    font-size: 20px;
  }

  a {
    text-decoration: none;
  }

  input, select {
    outline: none;
    border: 0;
  }

  header {
    z-index: 10 !important;
  }

  .tabbar {
    width: 100%;
    z-index: 10 !important;
  }

  ul li {
    list-style: none;
  }

  .tabbar img {
    width: 1.2rem;
    height: 1.2rem;
  }

  .active1 a {
    color: #9cc4ad !important;
  }

  .active2 a {
    color: #f9afbd !important;
  }

  .active3 a {
    color: #f3be57 !important;
  }

  /*menu*/
  .menuMask {
    position: fixed;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    z-index: 200;
  }

  .menu {
    width: 40px;
    height: 40px;
    background: cadetblue;
    line-height: 9px;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 101;
  }

  .line {
    display: inline-block;
    width: 76%;
    margin-left: 12%;
    height: 3px;
    background: #fff;
  }

  .trans {
    animation: transf 0.6s;
    -webkit-animation: transf 0.6s;
    animation-fill-mode: forwards;
    -webkit-animation-fill-mode: forwards;
  }

  @keyframes transf {
    from {
      transform: translate(0);
    }
    to {
      transform: translate(60%);
    }
  }

  -webkit-@keyframes transf {
    from {
      transform: translate(0);
    }
    to {
      transform: translate(60%);
    }
  }
</style>
