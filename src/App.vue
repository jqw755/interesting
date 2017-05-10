<template>
  <div id="app">

    <router-view></router-view>

    <!--页脚-->
    <mt-tabbar fixed class="tabbar" v-model="selected">
      <mt-tab-item id="_home" :class="activeClass">
        <img slot="icon" src="./assets/images/home.png">
        <router-link to="/home">首页</router-link>
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
        if (to.path == '/home') {
          document.title = '首页';
          this.selected = '_home';
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
  .tabbar{
    width: 100%;
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

</style>
