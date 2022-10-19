<template>
  <div>
    <h1>当前求和为：{{ sum }}</h1>
    <h3>当前求和放大10倍为：{{ bigSum }}</h3>
    <h3 style="color: red">下方组件的总人数是：{{ personList.length }}</h3>
    <h3>{{ student }}在{{ school }}抓住了{{ teacher }}老师的手</h3>
    <select v-model="n">
      <option :value="1">1</option>
      <option :value="2">2</option>
      <option :value="3">3</option>
    </select>
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd(n)">当前求和为奇数再加</button>
    <button @click="incrementWait(n)">等一等再加</button>
  </div>
</template>

<script>
import { mapGetters, mapState, mapMutations, mapActions } from 'vuex'
export default {
  name: 'Count',
  data() {
    return {
      n: 1,
    }
  },
  computed: {
    ...mapState(['sum', 'school', 'teacher', 'student', 'personList']),

    ...mapGetters(['bigSum']),
  },
  methods: {
    ...mapMutations({ increment: 'JIA', decrement: 'JIAN' }),

    ...mapActions({ incrementOdd: 'jiaOdd', incrementWait: 'jiaWait' }),
  },
}
</script>

<style>
button {
  margin: 5px;
}
</style>