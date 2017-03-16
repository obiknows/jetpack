<template lang="pug">
.about
  h1 TO BE BUILT...[the desk]
</template>

<script>
import auth from '../auth.js'

export default {
    name: 'desk',
    data () {
        return {
        }
    },

    checkLogin () {
        return console.log(auth.loggedIn())
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
