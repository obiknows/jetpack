<template lang="pug">
//- create the app div
#app

  //- load the views
  router-view.view

</template>

<script>
// import auth from './auth' // use [auth.js'] here

export default {
    // default data store of the app
    data () {
        console.log('in the data() method of the `APP.VUE`')
        // console.log('auth says: ', auth.loggedIn())
        return { /* loggedIn: auth.loggedIn() */ }
    }
    //  on creation,
    // onCreate () {
    //     auth.onChange = loggedIn => { this.loggedIn = loggedIn }
    // }
}
</script>

<style>
/* APP WIDE CSS */
html {
  background: #6B4E81;
  /*background: #DD682C;*/
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*color: white;*/
  /*margin-top: 60px;*/
  background: white;
}

h1, h2 {
  font-weight: normal;
}
</style>
