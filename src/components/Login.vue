<template lang="pug">
//- .login
//-     //- h2 Login
//-     <p v-if="$route.query.redirect" class="">
//-       You need to login first.
//-     </p>
//-     <form @submit.prevent="login">
//-       label
//-         <input v-model="email" placeholder="email"></label>
//-       label
//-         <input v-model="pass" placeholder="password" type="password"></label> (hint: password1)<br>
//-       <button type="submit">login</button>
//-       <p v-if="error" class="error">Bad login information</p>
//-     </form>

//- OR...

<main class="pa4 black-80">
  <form class="measure center">
    <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
      <legend class="f4 fw6 ph0 mh0">Sign In</legend>
      <div class="mt3">
        <label class="db fw6 lh-copy f6" for="email-address">Email</label>
        <input class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address">
      </div>
      <div class="mv3">
        <label class="db fw6 lh-copy f6" for="password">Password</label>
        <input class="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password">
      </div>
      //- <label class="pa0 ma0 lh-copy f6 pointer"><input type="checkbox"> Remember me</label>
    </fieldset>
    <div class="">
      <input class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in">
    </div>
    <div class="lh-copy mt3">
      <a href="#0" class="f6 link dim black db">Sign up</a>
      <a href="#0" class="f6 link dim black db">Forgot your password?</a>
    </div>
  </form>
</main>



</template>

<script>
import auth from '../auth'
export default {
    name: 'login',
    data () {
        return {
            email: 'joe@example.com',
            pass: '',
            error: false
        }
    },
    methods: {
        login () {
            auth.login(this.email, this.pass, loggedIn => {
                if (!loggedIn) {
                    this.error = true
                } else {
                    this.$router.replace(this.$route.query.redirect || '/')
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
