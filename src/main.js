import Vue from 'vue';
import VueRouter from 'vue-router';

import Navbar from './components/Navbar.vue';
import Home from './pages/Home.vue';
import About from './pages/About.vue';

Vue.use(VueRouter);

const components = {
  Navbar
}

// Array of routes for router instance
const routes = [
  {
    path: '/',
    name: 'homeRoute',
    component: Home
  },
  {
    path: '/about',
    name: 'aboutRoute',
    component: About
  }
]

// instantiation of router using predefined routes array
const router = new VueRouter({
  mode: 'history',
  routes
});

// instantiation of main vue component utilizing router
const app = new Vue({
  router,
  components
}).$mount('#app');
