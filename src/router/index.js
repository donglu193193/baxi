import Vue from 'vue'
import Router from 'vue-router'
import Currency from '@/components/Currency'
import Home from '@/components/Home'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Account from '@/components/Account'
import Wallet from '@/components/Wallet'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Safe from '@/components/Safe'
import RetrievePw from '@/components/RetrievePw'
import 'bootstrap/dist/css/bootstrap.css'
import js from '../js/jquery-1.4.2.min.js'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/currency',
      name: 'Currency',
      component: Currency
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/contact',
      name: '/Contact',
      component: Contact
    },
    {
      path: '/account',
      name: '/account',
      component: Account
    },
    {
      path: '/wallet',
      name: '/wallet',
      component: Wallet
    },
    {
      path: '/safe',
      name: '/safe',
      component: Safe
    },
    {
      path: '/login',
      name: '/login',
      component: Login
    },
    {
      path: '/register',
      name: '/register',
      component: Register
    },
    {
      path: '/retrievePw',
      name: '/retrievePw',
      component: RetrievePw
    },

  ]
})
