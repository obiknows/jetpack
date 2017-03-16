<template lang="pug">
//- create the app div
#app
  //- create the header
  header.pa4.pa4-ns
    router-link(class="link dim black b f1 f-headline-ns tc db mb3 mb4-ns ml4" to="/" title="Home") 🚀 jetpack

    //- then the navbar (feel free to use HTML || 'pug' [template language])
    nav.bt.bb.tc.mw7.center.mt4
      router-link(class="f4 f5-1 link b bg-animate black-80 hover-bg-light-red dib pa3 ph4-l" to="/") Home
      router-link(class="f4 f5-1 link b bg-animate black-80 hover-bg-light-yellow dib pa3 ph4-l" to="/school") School
      router-link(class="f4 f5-1 link b bg-animate black-80 hover-bg-light-green dib pa3 ph4-l" to="/desk") Desk
      router-link(class="f4 f5-1 link b bg-animate black-80 hover-bg-light-blue dib pa3 ph4-l" to="/classes") Classes
      router-link(class="f4 f5-1 link b bg-animate black-80 hover-bg-light-pink dib pa3 ph4-l" to="/settings") Settings
      //- {if signed in...}
      a(v-if="loggedIn" class="f4 f5-1 link b bg-animate black-80 hover-bg-light-purple dib pa3 ph4-l" href="/logout") Log out

  //- load the views
  router-view.view

</template>

<script>
import auth from './auth' // use [auth.js'] here

export default {
    // default data store of the app
    data () {
        console.log('in the data() method of the `APP.VUE`')
        console.log('auth says: ', auth.loggedIn())
        return { loggedIn: auth.loggedIn() }
    },
    //  on creation,
    onCreate () {
        auth.onChange = loggedIn => { this.loggedIn = loggedIn }
    }
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
