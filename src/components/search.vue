<template>
  <section>

    <mt-header title="发现" fixed>
      <router-link :to=$router slot="left">
        <mt-button icon="back" @click="$router.go(-1)">返回</mt-button>
      </router-link>
    </mt-header>

    <div class="content">
      <h3>{{data.channel}}</h3>
      <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
        <ul>
          <li v-for="(item,index) in data.list">
            <h4 class="title">{{item.title}}</h4>
            <span class="yuan"><a :href="item.weburl"> 原文>></a></span>
            <span><img :src='item.pic' alt=""></span>
            <div class="context_p">
              <p v-html="item.content" class="context"></p>
              <p class="context_mask" @click="look_more(index)" ref=index>
                点击查看更多
              </p>
            </div>
          </li>
        </ul>
      </mt-loadmore>
    </div>

  </section>
</template>

<script>
  export default {
    name: 'home',
    data () {
      return {
        data: {},
        allLoaded: false
      }
    },
    mounted: function () {
//      console.log(this.$route.fullPath)
      this.$http.jsonp('http://api.jisuapi.com/news/get?appkey=be02a7f1d82973c8')//http://api.jisuapi.com/news/get?appkey=be02a7f1d82973c8 极速数据新闻API,免费用户仅1000次调用 https://www.jisuapi.com/my/api.php
      //https://api.weibo.com/2/statuses/public_timeline.json?access_token=238afbb084f36036a0e30e7259015964&source=732268538
        .then(function (data) {
          console.log(data)
          this.data = data.body.result;
        }, function (data) {
          console.log(data)
        })
    },
    watch: {
      '$route' (from) {

      }
    },
    filters: {},
    methods: {
      look_more(i){
        const _p = this.$refs.index[i];
        _p.style.display = 'none';
        _p.parentNode.style.height = 'auto';
      },
      loadTop(){
        this.$http.jsonp('http://api.jisuapi.com/news/get?appkey=be02a7f1d82973c8')
          .then(function (data) {
            console.log('顶部下拉刷新')
            this.data = data.body.result;
          }, function (data) {
            console.log(data)
          });
        this.$refs.loadmore.onTopLoaded();
      },
      loadBottom(){
//        this.$http.jsonp('http://api.jisuapi.com/news/get?appkey=be02a7f1d82973c8')
//          .then(function (data) {
//            console.log('底部上拉刷新')
//            this.data = data.body.result;
//          }, function (data) {
//            console.log(data)
//          });
//        this.allLoaded = true;// 若数据已全部获取完毕
//        this.$refs.loadmore.onBottomLoaded();
      },

    }
  }
</script>

<style scoped>

  /*content*/
  .content {
    padding: 3rem 0.7rem 3.8rem 0.7rem;
    font-size: 0.7rem;
  }

  .content ul {
    min-height: 25rem;
  }

  .content ul li {
    padding-top: 0.8rem;
    padding-bottom: 0.8rem;
    border-bottom: 2px solid #ff6c26;
  }

  .yuan {
    font-size: 0.6rem;
    color: #5a9bec;
    margin: 0.4rem 0.2rem;
  }

  .context_p {
    width: 100%;
    height: 7rem;
    overflow: hidden;
    position: relative;
  }

  .p_show {
    display: none;
  }

  .context_mask {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3rem;
    background: rgba(255, 255, 255, 0.8);
    z-index: 2;
    font-size: 0.7rem;
    color: #5a9bec;
    text-align: center;
    line-height: 3rem;
  }

  .wei_img li {
    display: inline-block;
  }
</style>

<!--
新闻列表
请求链接：http://wangyi.butterfly.mopaasapp.com/news/api?type=war&page=1&limit=10
type :新闻类型
page :当前页数
limit :请求条数
例如：
type=war&page=1&limit=10 ,请求军事新闻第1-10条。
type=war&page=2&limit=10 ,请求军事新闻第10-20条，以此类推...

#	代码	类型
1	war	军事
2	sport	体育
3	tech	科技
4	edu	教育
5	ent	娱乐
6	money	财经
7	gupiao	股票
8	travel	旅游
9	lady	女人




详情列表
请求链接：http://wangyi.butterfly.mopaasapp.com/detail/api?simpleId=8

simpleId:新闻id
例如：simpleId=8 即获取id为8的新闻内容，该id可由上面的新闻列表请求数据中获得

-->

