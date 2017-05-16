<template>
  <section>
    <p class="search_p">
      <input type="text" placeholder="..." id="search_text" @keydown.enter="getSearch()">
      <span class="search_i" id="search_i" @click="getSearch()">发送</span>
    </p>

    <h5 style="text-align: right">bug重重啊</h5>

    <div class="content">
      <ul v-for="message in messages">
        <li>
          <p v-if="message" class="message_p">
            <span class="me">{{message.q}}</span>
          </p>
          <p v-if="message" class="message_p">
            <span class="other">{{message.a}}</span>
          </p>
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
        messages: [],
        count: 0
      }
    },
    methods: {
      getSearch(){
        let question = document.getElementById('search_text').value;
        document.getElementById('search_text').value = '';
        if (question !== '') {
          this.$http.jsonp('http://api.jisuapi.com/iqa/query?appkey=be02a7f1d82973c8&question=' + question) //机器人智能问答
            .then(function (data) {
              if (data.status === 200) {
//                console.log(data);
                this.counts += 1;
                this.data = data.body.result;
                this.messages.push(
                  {q: question, a: this.data.content}
                );
//                console.log(this.messages)
//                document.body.scrollTop = document.getElementsByClassName('content ul')[this.count-1].scrollTop;
              } else {
                alert('服务端错误' + data.status);
              }
            }, function (data) {
              alert(data)
            })
        }
      }
    }
  }
</script>

<style scoped>
  section {
    margin-bottom: 4rem;
    min-height: 100%;
  }

  /*search*/
  .search_p {
    width: 100%;
    height: 1rem;
    position: fixed;
    bottom: 2.75rem;
    padding-top: 0.8rem;
    background: #1cbfcc;
    z-index: 100;
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
    padding: 2.5rem 0.7rem 2rem 0.7rem;
    font-size: 0.7rem;
  }

  .content ul li {
    padding: 0 0.5rem 1rem 0.5rem;

  }

  .pic li {
    display: inline-block;
    text-align: center;
  }

  /*对话框*/
  .message_p {
    position: relative;
    width: 100%;
    height: 24px;
    font-size: 12px;
    margin-bottom: 10px;
  }

  .me {
    background: #f1ad8c;
    padding: 3px 8px;
    border-radius: 4px;
    text-align: left;
    position: absolute;
    right: 0;
    top: 10px;
    max-width: 49%;
  }

  .other {
    background: #eee;
    padding: 3px 8px;
    border-radius: 4px;
    text-align: left;
    position: absolute;
    left: 0;
    top: 10px;
    max-width: 49%;
  }


</style>


