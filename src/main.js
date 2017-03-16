/*
  [ + MAIN.JS + ]

  + entry point for the jetpack
  + how to put the jetpack on.
*/

// LIBRARIES
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router' // <- delete if you dont need

/*
  [ ] APP PARTS/MODULES
*/
import Home from './components/Home'
import Desk from './components/Desk'
import School from './components/School'
import Class from './components/Class'
import Settings from './components/Settings'
import '!style!css!tachyons/css/tachyons.css' // <- delete if you dont need

// USE VueRouter [this is for MULTIPLE PAGE apps]
Vue.use(VueRouter) // <- delete if you dont need

/*
  [ ] APP ROUTES
*/
const routes = [
    {path: '/', component: Home},
    {path: '/school', component: School},
    {path: '/desk', component: Desk},
    {path: '/class', component: Class},
    {path: '/settings', component: Settings}
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
