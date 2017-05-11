<template>
  <section>
    <p class="search_p">
      <input type="text" placeholder="搜索..." id="search_text">
      <i class="search_i" id="search_i" @click="getSearch()"></i>
    </p>

    <div class="content">
      <ul>
        <li v-for="item in data">
          <span>

          </span>
          <span>{{item.text}}</span>
          <ul class="pic">
            <li v-for="pic in item.pic_urls">
              <img :src="pic.thumbnail_pic" alt="">
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
    methods: {
      getSearch(){
        let name = document.getElementById('search_text').value;
        if (name !== '') {
          this.$http.jsonp('https://api.weibo.com/2/statuses/home_timeline.json?app_secret=9df783a5fb3d745764ec0194ef89d8a7&source=732268538&screen_name=' + name)
            .then(function (data) {
              console.log(data)
              this.data = data.body.data.statuses;
            }, function (data) {
              console.log(data)
            })
        }
      }
    }
  }
</script>

<style scoped>
  section {
    margin-bottom: 3.5rem;
  }

  /*search*/
  .search_p {
    width: 100%;
    height: 1.5rem;
    position: fixed;
    top: 0;
    padding-top: 0.8rem;
    background: #1cbfcc;
  }

  #search_text {
    display: inline-block;
    width: 80%;
    height: 70%;
    padding: 0 0.5rem 0 0.5rem;
    position: absolute;
    top: 50%;
    left: 0.6rem;
    -webkit-transform: translate(0, -50%);
    transform: translate(0, -50%);
  }

  .search_i {
    display: inline-block;
    width: 0.8rem;
    height: 0.8rem;
    background: url("../assets/images/search_1.png") no-repeat;
    background-size: 100% 100%;
    position: absolute;
    top: 50%;
    right: 0.6rem;
    -webkit-transform: translate(0, -50%);
    transform: translate(0, -50%);
  }

  .content {
    padding-top: 3rem;
    font-size: 0.7rem;
  }

  .content ul li {
    padding: 0 0.5rem 1rem 0.5rem;

  }
  .pic li{
    display: inline-block;
    text-align: center;
  }


</style>


