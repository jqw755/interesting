<template>
  <section class="clearfix">
    <div class="content">
      <div class="video_desc clearfix">
        <span>分类:</span>
        <ul>
          <li v-for="genre in items.genres">
            {{genre}} &nbsp;

          </li>
        </ul>
        <br>
        <span class="summary">{{items.summary}}</span>
      </div>
      <div class="video_img">
        <img :src="items.images.medium" alt="">
        <span class="video_name">{{items.title}}</span>
        <span class="average">{{items.rating.average}}</span>
      </div>
    </div>
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

      },
      getDetail(){
        const video_id = this.getQuery('id');
        this.$http.jsonp('https://api.douban.com/v2/movie/subject/' + video_id)
          .then(function (data) {
            console.log(data);
            this.items = data.body;

          }, function (data) {
            console.log(data)
          })
      },
      getComments(){
        const video_id = this.getQuery('id');
        this.$http.jsonp('https://api.douban.com/v2/movie/subject/'+ video_id+'/comments')
          .then(function (data) {
            console.log(data);
          }, function (data) {
            console.log(data)
          })
      }
    },
    mounted: function () {
      this.getDetail();
      this.getComments();

    }
  }
</script>

<style scoped>
  .clearfix {
    content: '';
    display: inline-block;
    clear: both;
  }

  section {
    /*width: 100%;*/
    padding: 0 1rem 0 1rem;
  }

  .content {
    width: 100%;
  }

  .video_desc, .video_img {
    display: inline-block;
  }

  .video_desc {
    float: left;
    display: block;
    font-size: 0.7rem;
    width: 66%;
  }

  .summary {
    display: block;
    text-indent: 16px;
  }

  .video_img {
    float: right;
  }

  .video_img img {
    display: block;
    margin-bottom: 0.3rem;
  }

  .video_name, .average {
    display: block;
    font-size: 0.7rem;
    width: 100%;
    text-align: center;
  }

  .average {
    color: #16a573;
  }

</style>

