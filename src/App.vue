<template>
  <div id="app">
    <!--页头-->
    <mt-header fixed :title=title_ id="title"></mt-header>

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
        title_: 'interesting',
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
      selected(val){
        if (val === '_home') {
          this.activeClass = 'active1';
        } else if (val === '_search') {
          this.activeClass = 'active2';
        } else if (val === 'my') {
          this.activeClass = 'active3';
        }
      },
      '$route' (to) {
        if (to.path == '/home') {
          this.title_ = 'interesting';
          document.title = '首页';
        } else if (to.path == '/search') {
          this.title_ = 'search';
          document.title = '搜索';
        } else if (to.path == '/my') {
          this.title_ = 'my';
          document.title = '个人中心';
        }

      }
    },
    mounted: function () {

    },
    methods: {}
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
    margin-top: 60px;
  }

  html {
    font-size: 20px;
  }

  a {
    text-decoration: none;
  }

  ul li{
    list-style: none;
  }

  #title {
    /*display: block;*/
    /*text-align: center;*/
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
