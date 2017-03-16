<template lang="pug">
//- create the app div
#app
  header
    h1.f1.f-headline-ns.m.mb2.mb4-ns.ml4.center 🚀 jetpack
    h2.f2.f-subheadline-ns.mb2.mb4-ns.center some subline

    //- then the navbar
    nav.bt.bb.tc.mw7.center.mt4
      a(class="f6.f5-1.link.bg-animate.black-80.hover-bg-lightest-blue.dib.pa3.ph4-l" href="/") Home
      a(class="f6.f5-1.link.bg-animate.black-80.hover-bg-lightest-blue.dib.pa3.ph4-l" href="/school") School
      a(class="f6.f5-1.link.bg-animate.black-80.hover-bg-lightest-blue.dib.pa3.ph4-l" href="/desk") Desk
      a(class="f6.f5-1.link.bg-animate.black-80.hover-bg-lightest-blue.dib.pa3.ph4-l" href="/classes") Classes
      a(class="f6.f5-1.link.bg-animate.black-80.hover-bg-lightest-blue.dib.pa3.ph4-l" href="/settings") Settings


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
