<template>
  <section>
    <div class="content">
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
      }
    },
    watch: {

    },
    mounted: function () {
      this.loading = true;
      this.$http.jsonp('https://api.douban.com/v2/movie/in_theaters?city=上海&count=10')
        .then(function (data) {
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

    }
  }
</script>

<style scoped>
  /*.mint-tabbar > .mint-tab-item.is-selected {*/
  /*background-color: transparent;*/
  /*}*/
  /*key*/
  .title {
    font-size: .7rem;
    margin-bottom: 0.8rem;
  }
  .video_ul{
    margin-bottom:4rem;
  }
  .video_ul li{
    width: 50%;
    display: inline-block;
    text-align: center;
    margin-bottom: 0.5rem;
  }
  .video_ul li p{
    width: 100%;
    overflow: hidden;
  }
  .video_name,.average{
    font-size: .6rem;
    color: #000;
  }
  .average{
    color: #16a573;
  }


</style>

