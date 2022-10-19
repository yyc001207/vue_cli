<template>
  <h2>我是About组件的内容</h2>
</template>

<script>
export default {
  name: 'About',
  /*   beforeDestroy() {
    console.log('About即将被销毁')
  }, */
  /*   mounted() {
    console.log('About挂载完毕', this)
    window.aboutRoute = this.$route
    window.aboutRouter = this.$router
  }, */
  //通过路由规则进入
  beforeRouteEnter(to, from, next) {
    if (to.meta.isAuth) {
      if (localStorage.getItem('school') === 'atguigu') {               
        next()
      } else {
        alert('学校名错误')
      }
    } else {
      next()
    }
  },
  //离开组件
  beforeRouteLeave(to, from, next) {
    next()
  },
}
</script>

<style>
</style>