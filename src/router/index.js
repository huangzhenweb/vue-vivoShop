import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Information from"@/components/Information"
import Cart from "@/components/cart"
import My from "@/components/my"
import goodDetail from '@/components/goodDetail'
import news from '@/components/news'
import choose from "@/components/choose"
import parts from "@/components/parts"
import order from "@/components/order"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
    	path:'/home',
    	name:"Home",
    	component: Home
    },
    {
    	path:'/Information',
    	name:"Information",
    	component:Information
    },
    {
    	path:'/cart',
    	name:"cart",
    	component: Cart
    },
    {
    	path:'/my',
    	name:"my",
    	component:My
    },
    {
    	path:'/goodDetail',
    	name:"goodDetail",
    	component:goodDetail
    },
     {
    	path:'/news',
    	name:"news",
    	component:news
    },
    {
    	path:'/choose',
    	name:"choose",
    	component:choose
    },
     {
    	path:'/parts',
    	name:"parts",
    	component:parts
    },
    {
    	path:'/order',
    	name:order,
    	component:order
    }
  ]
})
