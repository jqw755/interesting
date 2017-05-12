<template>
  <section>
    <p class="search_p">
      <input type="text" placeholder="..." id="search_text" @keydown.enter="getSearch()">
      <span class="search_i" id="search_i" @click="getSearch()">发送</span>
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
        let question = document.getElementById('search_text').value;
        if (question !== '') {
          this.$http.jsonp('http://api.jisuapi.com/iqa/query?appkey=be02a7f1d82973c8&question=' + question) //机器人智能问答
            .then(function (data) {
              console.log(data)
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
    height: 1rem;
    position: absolute;
    bottom: 3.1rem;
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
    width: 1.6rem;
    height: 1.2rem;
    position: absolute;
    top: 50%;
    right: 0.3rem;
    -webkit-transform: translate(0, -50%);
    transform: translate(0, -50%);
    background: #267bd2;
    color: #fff;
    font-size: 0.5rem;
    text-align: center;
    line-height: 1.2rem;
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


