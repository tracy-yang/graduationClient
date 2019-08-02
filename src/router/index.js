import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/views/login/login'

import Commodity from '@/views/commodity/index.vue'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			redirect: '/commodity',
			name: '主页',
			component: Layout,
			children: [
				{
					path: '/home',
					name: 'HelloWorld',
					component: HelloWorld,
				}
			]
		},
		{
			path: '/login',
			name: 'login',
			component: Login
		},
		{
			path: '/commodity',
			redirect: '/commodity/list',
			name: '商品',
			component: Layout,
			children: [
				{
					path: '/list',
					name: '待审核',
					component: Commodity,
				}
			]
		}
	]
})
