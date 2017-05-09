<template>
  <section>
    <mt-search
      v-model="value"
      cancel-text="取消"
      placeholder="搜索">
    </mt-search>
  </section>
</template>

<script>
  export default {
    name: 'home',
    data () {
      return {
        value:'',
      }
    }
  }
</script>

