<template lang="pug">
//- .login
//-     //- h2 Login
//-     <p v-if="$route.query.redirect" class="">
//-       You need to login first.
//-     </p>
//-     <form @submit.prevent="login">
//-       label
//-         <input v-model="username" placeholder="enter a username"></label>
//-       label
//-         <input v-model="password" placeholder="password"></label> (hint: password1)<br>
//-       <button type="submit">login</button>
//-       <p v-if="error" class="error">Bad login information</p>
//-     </form>

//- OR...

//- create the header
//- header.pa4.pa4-ns
//-   a(class="dim black b f1 f-headline-ns tc mb3 mb4-ns ml4 outline-0 no-underline" href="/" title="Home") 🚀 jetpack

<main class="pa4 black-80 center">
  //- a warning message
  <p v-if="$route.query.redirect" class="">
    You need to login first.
  </p>
  <form @submit.prevent="login" class="measure center center">
    <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
      <legend class="fw6 ph0 mh0 f4 f1-m f-headline-l center">Sign In</legend>
      <div class="mt3">
        <label class="db fw6 lh-copy f6 center" for="username">Username</label>
        input(v-model="username" type="username" class="b pa2 input-reset ba bg-transparent hover-bg-light-purple hover-white w-100 outline-0 tc")
      </div>
      <div class="mv3">
        <label class="db fw6 lh-copy f6 center" for="password">Password</label>
        input(v-model="password" type="password" class="b pa2 input-reset ba bg-transparent hover-bg-light-purple hover-white w-100 outline-0 tc")
      </div>
      <label class="pa0 ma0 lh-copy f6 pointer"><input type="checkbox"> Remember me</label>
    </fieldset>
    <div class="">
      <input class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in">
    </div>
    <div class="lh-copy mt3">
      <a href="#0" class="b f5 link dim black db">Sign up</a>
      <a href="#0" class="b f5 link dim black db">Forgot your password?</a>
    </div>
  </form>
</main>

</template>

<script>
import auth from '../auth'

export default {
    data () {
        return {
            username: 'joe@example.com',
            password: '',
            error: false
        }
    },
    methods: {
        login () {
            // take the username and pass from from and pass to auth.login()
            auth.login(this.username, this.password, loggedIn => {
                if (!loggedIn) {
                    this.error = true
                } else {
                    // on next frame, redirect
                    this.$nextTick(function () {
                        this.$router.replace(this.$route.query.redirect || '/')
                        location.reload()
                    })
                }
            })
        }
    }
}
</script>

<style>
.error {
  color: red;
}
</style>
