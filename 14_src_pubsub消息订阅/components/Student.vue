<template>
  <div class="student">
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <button @click="sendStudentName">把学生名给School组件</button>
  </div>
</template>

<script>
import pubsub from 'pubsub-js' //pubsub是一个对象
export default {
  name: 'MyStudent',
  data() {
    return {
      name: '张三',
      sex: '男',
    }
  },
  methods: {
    sendStudentName() {
      // this.$bus.$emit('hello', this.name)
      pubsub.publish('hello', this.name)
    },
  },
}
</script>

<style lang="less">
.student {
  background-color: orange;
  padding: 5px;
}
</style>