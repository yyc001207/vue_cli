<template>
  <div class="student">
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <button @click="sendStudentName">把学生名给App</button>
    <button @click="unbind">解绑自定义事件</button>
  </div>
</template>

<script>
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
      //触发Student组件实例身上的atguigu事件
      this.$emit('atguigu', this.name)
      // this.$emit('demo')
    },
    unbind() {
      this.$off('atguigu') //解绑一个
      // this.$off(['atguigu', 'demo']) //解绑多个
      // this.$off() //解绑全部
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