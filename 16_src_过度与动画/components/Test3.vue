<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition
      name="animate__animated animate__bounce"
      enter-active-class="animate__swing"
      leave-active-class="animate__backOutUp"
      appear
    >
      <h1 v-show="isShow">你好啊</h1>
    </transition>
  </div>
</template>

<script>
import 'animate.css'
export default {
  name: 'Test',
  data() {
    return {
      isShow: true,
    }
  },
}
</script>

<style>
h1 {
  background-color: orange;
  transition: 0.5s linear;
}
</style>