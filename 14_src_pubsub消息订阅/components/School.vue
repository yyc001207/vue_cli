<template>
  <div class="school">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template>

<script>
import pubsub from 'pubsub-js' //pubsub是一个对象
export default {
  name: 'MySchool',
  data() {
    return {
      name: '尚硅谷',
      address: '北京',
    }
  },
  methods: {
    demo(msg, data) {
      console.log('订阅成功', data)
    },
  },
  mounted() {
    // this.pubId = pubsub.subscribe('hello', (msg, data) => {
    //   console.log('订阅成功', data)
    // })
    this.pubId = pubsub.subscribe('hello', this.demo)
  },
  beforeDestroy() {
    pubsub.unsubscribe(this.pubId)
  },
}
</script>

<style scoped>
.school {
  background-color: #bfa;
  padding: 5px;
  margin-top: 30px;
}
</style>