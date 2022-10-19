<template>
  <div class="app">
    <h2>{{ msg }}，学生姓名：{{ studentName }}</h2>
    <!-- 通过父组件向子组件传递函数类型的props实现：子给父传递数据 -->
    <School :getSchoolName="getSchoolName" />
    <hr />
    <!-- 通过父组件向子组件绑定自定义事件：子给父传递数据(使用v-on) -->
    <!-- <Student v-on:atguigu="getStudentName" @demo="m1" /> -->

    <!-- 通过父组件向子组件绑定自定义事件：子给父传递数据（使用ref） -->
    <Student ref="student" @click.native="show" />
  </div>
</template>

<script>
import School from './components/School.vue'
import Student from './components/Student.vue'
export default {
  name: 'App',
  components: { Student, School },
  data() {
    return {
      msg: '欢迎学习vue',
      studentName: '',
    }
  },
  methods: {
    getSchoolName(name) {
      console.log('收到学校名', name)
    },
    getStudentName(name) {
      console.log('学生姓名', name)
      this.studentName = name
    },
    m1() {
      console.log('demo被调用了！')
    },
    show(){
      alert(123)
    }
  },
  mounted() {
    this.$refs.student.$on('atguigu', this.getStudentName)
  },
}
</script>

<style lang="less" scoped>
.app {
  background-color: gray;
  padding: 5px;
}
</style>