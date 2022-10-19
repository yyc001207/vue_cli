<template>
  <div>
    <h3>列表中第一个人的名字是:{{ firstPersonName }}</h3>
    <input type="text" placeholder="请输入名字" v-model="name" />
    <button @click="add">添加</button>
    <button @click="addPersonServer">添加一个随机姓名的人</button>
    <ul>
      <li v-for="p in personList" :key="p.id">{{ p.name }}</li>
    </ul>
  </div>
</template>

<script>
import { nanoid } from 'nanoid'
export default {
  name: 'Person',
  data() {
    return {
      name: '',
    }
  },
  computed: {
    // ...mapState(['personList']),
    personList() {
      return this.$store.state.personAbout.personList
    },
    firstPersonName() {
      return this.$store.getters['personAbout/firstPersonName']
    },
  },
  methods: {
    add() {
      const personObj = { id: nanoid(), name: this.name }
      this.$store.dispatch('personAbout/add_person', personObj)
      this.name = ''
    },
    addPersonServer(){
      this.$store.dispatch('personAbout/addPersonServer')
    }
  },
}
</script>