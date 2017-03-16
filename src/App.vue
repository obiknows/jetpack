<template lang="pug">
#app
  h1 jetpack
  ul
    li
      router-link(to="/") /
    li
      router-link(to="/about") /about
    router-view.view
</template>

<script>
export default {
    name: 'app',
    components: {
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
