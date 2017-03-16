<template lang="pug">
//- .org-block.w5.h5.bg-purple.tc.v-mid
//-   h1.white {{ organization.name }}
//-   h3.white {{ organization.desc }}



//-
article.classes
  h2.f3.fw4.pa3.mv0 {{ organization.name }}
  .cf.pa2
    .bg-light-blue.fl.w-100.pa2
      //- a class
      <router-link class="db link dim tc" to="#">
        img(class="w-100 db outline black-10" src="http://is4.mzstatic.com/image/thumb/Music62/v4/93/8f/75/938f7536-0188-f9ba-4585-0a77ceaebf0a/source/400x40000bb.png")
      </router-link>
      dl.mt2.f6.lh-copy
        dt.clip Description
        dt.m10.black.w-100.truncate {{ organization.desc }}
        dt.clip Cost
        dt.m10.gray.w-100.truncate Free


</template>

<script>
export default {
    name: 'org-block',
    props: [ 'organization' ],  // necessary data to be passed from parent
    data () {
        return { }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
