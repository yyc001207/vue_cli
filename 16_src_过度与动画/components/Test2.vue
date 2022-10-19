<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition name="hello" appear>
      <h1 v-show="isShow">你好啊</h1>
    </transition>
  </div>
</template>

<script>
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
/* 进入起点 */
.hello-enter {
  transform: translateX(-100%);
}
/* 进入终点 */
.hello-leave-to {
  transform: translateX(0);
}
</style>