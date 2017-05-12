<template>
  <section>
    <mt-header fixed title="interesting"></mt-header>

    <!--setting-->
    <!--<div class="menu">-->
      <!--<span class="line"></span>-->
      <!--<span class="line"></span>-->
      <!--<span class="line"></span>-->
    <!--</div>-->

    <div :class="{loading:isLoading,loading1}">
      <mt-spinner type="triple-bounce" color="#26a2ff" class="ani_load"></mt-spinner>
    </div>
    <div class="content">

      <p class="search_p">
        <input type="text" placeholder="搜索..." id="search_text" @keydown.enter="search_res()">
        <i class="search_i" @click="search_res()"></i>
      </p>

      <p class="title">{{items.title}}</p>
      <ul class="video_ul">
        <li class="video_li" v-for="item in items.subjects">
          <router-link :to="`/movieDetail?id=${item.id}`">
            <p>
              <img :src='item.images.medium' alt="">
            </p>
            <p class="video_name">
              {{item.title}}
              </p>
            <p class="average">
              当前评分:{{item.rating.average}}
              </p>
          </router-link>
        </li>
      </ul>

    </div>

  </section>
</template>

<script>
  import movieDetail from './movieDetail.vue'
  import search from './search.vue'

  export default {
    name: 'home',
    data () {
      return {
        items: {},
        value: '',
        isLoading: true,
        loading1:true
      }
    },
    watch: {},
    mounted: function () {
      this.isLoading = false;
      this.$http.jsonp('https://api.douban.com/v2/movie/in_theaters?city=上海&count=10')
        .then(function (data) {
          this.isLoading = true;
          //https://free-api.heweather.com/v5/weather?city=上海&key=6d206d80917540cba8cb7eab7464a230  天气接口每日3000次
          //http://baike.baidu.com/api/openapi/BaikeLemmaCardApi?scope=103&format=json&appid=379020&bk_key=上海&bk_length=1000   百度百科接口
          //http://suggest.taobao.com/sug?code=utf-8&q=6  淘宝商品搜索
//          console.log(data);
          this.items = data.body;
        }, function (data) {
          //error
          console.log('失败:' + data)
        })
    },
    methods: {
      search_res(){
        this.isLoading = false;
        let text = document.getElementById('search_text').value;
        this.$http.jsonp('https://api.douban.com/v2/movie/in_theaters?city='+text+'&count=10')
          .then(function (data) {
            this.isLoading = true;
            this.items = data.body;
          }, function (data) {
            console.log('失败:' + data)
          })
      }
    }
  }
</script>

<style scoped>
  .menu{
    width: 1.5rem;
    height: 1.5rem;
    background: #e25313;
    position: fixed;
    top: 0.2rem;
    left: 0.2rem;
    z-index: 11;
  }
  .line{
    display: inline-block;
    width: 80%;
    margin-left:10%;
    height:0.2rem;
    background: #0dbd89;
  }





.content{
  padding-top: 4rem;
}
  /*key*/
  .title {
    font-size: .7rem;
    margin-bottom: 0.8rem;
  }

  .video_ul {
    margin-bottom: 4rem;
  }

  .video_ul li {
    width: 50%;
    display: inline-block;
    text-align: center;
    margin-bottom: 0.5rem;
  }

  .video_ul li p {
    width: 100%;
    overflow: hidden;
  }

  .video_name, .average {
    font-size: .6rem;
    color: #000;
  }

  .average {
    color: #16a573;
  }

  .loading {
    display: none;
  }
  .loading1{
    z-index: 2;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(255, 255, 255, 0.7);
  }

  .ani_load {
    position: absolute;
    top: 40%;
    left: 50%;
    -webkit-transform: translate(-50%);
    transform: translate(-50%);
  }

  /*search*/
  .search_p {
    border: 1px solid #009688;
    width: 90%;
    height: 1.2rem;
    line-height: 1.1rem;
    margin-left: 5%;
    position: fixed;
    top:2.03rem;
    background: #fff;
  }

  #search_text {
    display: inline-block;
    width: 85%;
    height: 80%;
    padding: 0 0.5rem 0 0.5rem;
  }

  .search_i {
    display: inline-block;
    width: 0.8rem;
    height: 0.8rem;
    background: url("../assets/images/search_1.png") no-repeat;
    background-size: 100% 100%;
    position: absolute;
    top: 50%;
    -webkit-transform: translate(0, -50%);
    transform: translate(0, -50%);
  }

</style>

