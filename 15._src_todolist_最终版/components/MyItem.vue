<template>
  <li>
    <label>
      <input
        type="checkbox"
        :checked="todo.done"
        @click="handlecheck(todo.id)"
      />
      <span v-show="!todo.isEdit">{{ todo.title }}</span>
      <input
        type="text"
        v-show="todo.isEdit"
        :value="todo.title"
        @blur="handleBlur(todo, $event)"
        ref="inputTitle"
      />
    </label>
    <button class="btn btn-danger" @click="handleDelet(todo.id, todo.title)">
      删除
    </button>
    <button
      class="btn btn-edit"
      @click="handleEdit(todo)"
      v-show="!todo.isEdit"
    >
      编辑
    </button>
  </li>
</template>

<script>
export default {
  name: 'MyItem',
  //声明接收todo对象
  props: ['todo'],
  methods: {
    handlecheck(id) {
      //通知App组件将对应的todo对象的done值取反
      this.$bus.$emit('checkTodo', id)
    },
    handleDelet(id, title) {
      //通知App组件删除对应的todo对象
      if (confirm('是否删除任务' + title + '?')) {
        this.$bus.$emit('deletTodo', id)
      }
    },
    handleEdit(todo) {
      if (todo.hasOwnProperty('Edit')) {
        todo.isEdit = true
      } else {
        this.$set(todo, 'isEdit', true)
      }
      this.$nextTick(function () {
        this.$refs.inputTitle.focus()
      })
    },
    handleBlur(todo, event) {
      todo.isEdit = false
      if (!event.target.value.trim()) return alert('输入不能为空')
      this.$bus.$emit('updateTodo', todo.id, event.target.value)
    },
  },
  /* directives: {
    fbind: {
      //指令所在模板被重新解析时
      update(element) {
        element.focus()
      },
    },
  }, */
}
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
li:hover {
  background-color: #eee;
}

li:hover button {
  display: block;
}
</style>