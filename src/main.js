/*
  [ + MAIN.JS + ]

  + entry point for the jetpack
  + how to put the jetpack on.
*/

// LIBRARIES
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router' // <- delete if you dont need

// USE VueRouter [this is for MULTIPLE PAGE apps]
Vue.use(VueRouter) // <- delete if you dont need

// USE Authentication (accounts & users)
import auth from './auth' // <- delete if you dont need

/*
  [ ] APP PARTS/MODULES (pages of the app or parts of a page. its up to you.) [this is pages.]
*/
import Home from './components/Home'
import Login from './components/Login'
import Desk from './components/Desk'
import School from './components/School'
import Classes from './components/Classes'
import Settings from './components/Settings'
import '!style!css!tachyons/css/tachyons.css' // <- delete if you dont need

function checkAuth (to, from, next) {
    if (!auth.loggedIn()) { // go to auth & see if they say you're logged in
        next({path: '/login', query: {redirect: to.fullPath}})
    } else {
        next()
    }
}

/*
  [ ] APP ROUTES
*/
const routes = [
    {path: '/', component: Home},
    {path: '/login', component: Login},
    {path: '/school', component: School},
    {path: '/desk', component: Desk, beforeEnter: checkAuth},
    {path: '/classes', component: Classes},
    {path: '/settings', component: Settings},
    {path: '/logout', beforeEnter (to, from, next) { auth.logout(); next('/') }},

    // catch all other redirects
    { path: '*', redirect: '/' }
]

/*
  [ ] ROUTER CONFIGURATION
*/
const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: routes
})

/*
  [ ] MOUNT THE APP TO THE HTML
*/
export const app = new Vue({
    router,
    template: '<App/>',
    components: { App }
}).$mount('#app')
