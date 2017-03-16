<template lang="pug">
//- create the app div
#app
  //- create the header
  header.pa3.pa4-ns
    a(class="link dim black b f1 f-headline-ns tc db mb3 mb4-ns ml4" href="/" title="Home") 🚀 jetpack

    //- then the navbar
    nav.bt.bb.tc.mw7.center.mt4
      <router-link class="f4 f5-1 link b bg-animate black-80 hover-bg-lightest-blue dib pa3 ph4-l" to="/">Home</router-link>
      <router-link class="f4 f5-1 link b bg-animate black-80 hover-bg-lightest-blue dib pa3 ph4-l" to="/school">School</router-link>
      <router-link class="f4 f5-1 link b bg-animate black-80 hover-bg-lightest-blue dib pa3 ph4-l" to="/desk">Desk</router-link>
      <router-link class="f4 f5-1 link b bg-animate black-80 hover-bg-lightest-blue dib pa3 ph4-l" to="/classes">Classes</router-link>
      <router-link class="f4 f5-1 link b bg-animate black-80 hover-bg-lightest-blue dib pa3 ph4-l" to="/settings">Settings</router-link>

      //- a(class="f4 f5-1 link b bg-animate black-80 hover-bg-lightest-blue dib pa3 ph4-l" href="/") Home
      //- a(class="f4 f5-1 link b bg-animate black-80 hover-bg-lightest-blue dib pa3 ph4-l" href="/school") School
      //- a(class="f4 f5-1 link b bg-animate black-80 hover-bg-lightest-blue dib pa3 ph4-l" href="/desk") Desk
      //- a(class="f4 f5-1 link b bg-animate black-80 hover-bg-lightest-blue dib pa3 ph4-l" href="/classes") Classes
      //- a(class="f4 f5-1 link b bg-animate black-80 hover-bg-lightest-blue dib pa3 ph4-l" href="/settings") Settings

  //- load the views
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
html {
  /*background: #6B4E81;*/
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*color: white;*/
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}
</style>
