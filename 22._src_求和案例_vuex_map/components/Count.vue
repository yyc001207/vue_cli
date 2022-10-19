<template>
  <div>
    <h1>当前求和为：{{ sum }}</h1>
    <h3>当前求和放大10倍为：{{ bigSum }}</h3>
    <h3>{{ student }}在{{ school }}抓住了{{ teacher }}老师的手</h3>
    <select v-model="n">
      <option :value="1">1</option>
      <option :value="2">2</option>
      <option :value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">当前求和为奇数再加</button>
    <button @click="incrementWait">等一等再加</button>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
export default {
  name: 'Count',
  data() {
    return {
      n: 1,
    }
  },
  computed: {
    //亲自写计算属性
    /*     sum() {
      return this.$store.state.sum
    },
    school() {
      return this.$store.state.school
    },
    teacher() {
      return this.$store.state.teacher
    }, */

    //借助mapState生成计算属性，从state中读取数据。（对象写法）
    // ...mapState({ sum: 'sum', school: 'school', teacher: 'teacher' }),

    //数组写法
    ...mapState(['sum', 'school', 'teacher', 'student']),

    ...mapGetters (['bigSum']),
  },
  methods: {
    increment() {
      this.$store.commit('JIA', this.n)
    },
    decrement() {
      this.$store.commit('JIAN', this.n)
    },
    incrementOdd() {
      this.$store.dispatch('jiaOdd', this.n)
    },
    incrementWait() {
      this.$store.dispatch('jiaWait', this.n)
    },
  },
  mounted() {},
}
</script>

<style>
button {
  margin: 5px;
}
</style>