<template lang="pug">
.org-block.w5.h5.bg-purple.tc.v-mid
  h1.white {{ organization.name }}
  h3.white {{ organization.desc }}
</template>

<script>
export default {
    name: 'org-block',
    props: [
        'organization'
    ],
    data () {
        return {
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
