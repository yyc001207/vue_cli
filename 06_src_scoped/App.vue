<template>
  <div>
    <h2 class="title">{{ msg }}</h2>
    <School />
    <hr />
    <Student />
  </div>
</template>

<script>
import School from "./components/School.vue";
import Student from "./components/Student.vue";
export default {
  name: "App",
  components: { Student, School },
  data() {
    return {
      msg: "欢迎学习vue",
    };
  },
};
</script>

<style lang="less" scoped>
.title {
  color: red;
}
</style>