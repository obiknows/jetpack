<template lang="pug">
#app
  header jetpack
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
/* APP WIDE CSS */
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}
</style>
