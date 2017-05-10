<template>
  <section>

    <mt-header title="发现" fixed>
      <router-link :to=$router slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <!--<mt-button icon="more" slot="right"></mt-button>-->
    </mt-header>

    <div class="content">
      <ul>
        <li v-for="item in data">
          <span>{{item.text}}</span>
          <span>from {{item.location}} {{item.source}}</span>
          <ul class="wei_img">
            <li v-for="pic in item.pic_urls">
              <img :src='pic.thumbnail_pic' alt="">
            </li>
          </ul>
        </li>
      </ul>
    </div>

  </section>
</template>

<script>
  export default {
    name: 'home',
    data () {
      return {
        data: {},
      }
    },
    mounted: function () {
//      console.log(this.$route.fullPath)
      this.$http.jsonp('https://api.weibo.com/2/statuses/public_timeline.json?app_secret=9df783a5fb3d745764ec0194ef89d8a7&source=732268538')   //最新公开微博
      //https://api.weibo.com/2/statuses/public_timeline.json?access_token=238afbb084f36036a0e30e7259015964&source=732268538
        .then(function (data) {
          console.log(data)
          this.data = data.body.data.statuses;
        }, function (data) {
          console.log(data)
        })
    },
    watch: {
      '$route' (from) {

      }
    },
    filters: {
      getDevice(){
        let source = this.data.source;
        console.log(source)
        if (source != '' && source != undefined) {
            const source1 = source.split('</')
            console.log(source1)
        }
      }
    },
    methods: {

    }
  }
</script>

<style scoped>

  /*content*/
  .content {
    padding: 2.8rem 0.7rem 3rem 0.7rem;
    font-size: 0.7rem;
  }

  .content ul li {
    padding-bottom: 0.7rem;
  }

  .wei_img li{
    display: inline-block;
  }
</style>

