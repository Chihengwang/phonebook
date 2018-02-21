
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)


/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('example-component', require('./components/ExampleComponent.vue'));
let Myheader = require('./components/Myheader.vue')
let Myfooter = require('./components/Footer.vue')
//定義組件
let Home = require('./components/Home.vue')
let About = require('./components/About.vue')
//定義路由

const routes = [
    { path: '/',name:'dict'},
    { path: '/home',name:'home',component: Home },
    { path: '/about',name:'about',component: About }
  ]

  //傳入相對應的routes
  const router = new VueRouter({
      base: './phonebook/phone',
      mode: 'history',
    routes // （缩写）相当于 routes: routes
  })
//傳入router的參數
const app = new Vue({
    el: '#app',
    router,
    //設定局部組件
    components:{Myheader,Myfooter,Home,About},


});
