<template>
  <section class="clearfix">
    <p class="video_title" @click="$router.go(-1)">{{items.title}}</p>
    <div class="content clearfix">
      <div class="video_img">
        <a :href="items.mobile_url">
          <img :src="items.images.medium" alt="">
        </a>
      </div>
      <div class="video_desc clearfix">
        <ul>
          <li>{{items.rating.average}}分</li>
          <br/><br/>
          <li>{{items.year}}年</li>
          <br/>
          <li v-for="country in items.countries">
            {{country}}&nbsp;

          </li>
          <br/>
          <li v-for="genre in items.genres">
            {{genre}} &nbsp;

          </li>
        </ul>
        <br>
      </div>
    </div>
    <span class="summary">{{items.summary}}</span>
    <div class="reviews">
      {{items.property}}
    </div>
  </section>
</template>
s



<script>
  export default {
    name: 'ddd',
    data () {
      return {
        items: {},
      }
    },
    watch: {},
    methods: {
      getQuery() {
        let u = window.location.href,
          m = u.split('id=');
        return m[1];
      }
    },
    mounted: function () {
      const video_id = this.getQuery('id');
      this.$http.jsonp('https://api.douban.com/v2/movie/subject/' + video_id)
        .then(function (data) {
//          console.log(data);
          this.items = data.body;
        }, function (data) {
          console.log(data)
        });


      this.$http.jsonp('https://api.douban.com/v2/movie/search?q=张艺谋')  ///v2/movie/coming_soon
        .then(function (data1) {
//          console.log(data1);
        }, function (data1) {
          console.log(data1)
        });

    }
  }
</script>

<style scoped>
  .content {
    /*width: 100%;*/
    font-size: 0.7rem;
    padding: 0.5rem 0.5rem;
  }

  .video_title {
    width: 100%;
    height: 2rem;
    background: #333;
    color: #fff;
    font-size: 0.75rem;
    text-align: center;
    line-height: 2rem;
  }

  .video_desc, .video_img {
    display: inline-block;
  }

  .video_desc ul li {
    display: inline-block;
  }

  .summary {
    display: block;
    text-indent: 16px;
    font-size: 0.7rem;
    padding: 0.5rem 0.5rem;
  }
</style>

