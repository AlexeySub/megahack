import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from "../components/Login"
import Registr from "../components/Registr";
import Link1 from "../components/Link1"


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Home',
      name: 'home',
      component: Home
    },

    {
      path: '/',
      name: "login",
      component: Login
    },

    {
      path: '/Registr',
      name: "registr",
      component: Registr
    },

    {
      path: '/Link1',
      name: "link1",
      component: Link1
    }
  ]
})
