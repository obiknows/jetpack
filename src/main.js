import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Home from './components/Home'
import About from './components/About'
import '!style!css!tachyons/css/tachyons.css'

Vue.use(VueRouter)

const routes = [
    {path: '/', component: Home},
    {path: '/about', component: About}
]

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: routes
})

/* eslint-disable no-new */
export const app = new Vue({
    router,
    template: '<App/>',
    components: { App }
}).$mount('#app')
