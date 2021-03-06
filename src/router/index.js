import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/views/login/login'

import Commodity from '@/views/commodity/Index.vue'
import Category from '@/views/commodity/Category.vue'
import Brand from '@/views/commodity/Brand.vue'
import AddCommodity from '@/views/commodity/AddNewCommodity'


Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			redirect: '/home',
			name: '',
			hidden: true
		},
		{
			path: '/home',
			redirect: '/home/index',
			name: '主页',
			icon: '',
			component: Layout,
			children: [
				{
					path: 'index',
					name: 'HelloWorld',
					component: HelloWorld,
					hidden: true
				}
			]
		},
		{
			path: '/commodity',
			redirect: '/commodity/index',
			icon: '',
			name: '商品管理',
			component: Layout,
			children: [
				{
					path: 'index',
					redirect: '/commodity/index/commodity',
					name: '商品',
					component: Layout,
					children:[
						{
							path: 'commodity',
							name: '商品',
							component: Commodity,
						},
						{
							path: 'addCommodity',
							name: '添加商品',
							component: AddCommodity
						}
					]
				},
				{
					path: 'category',
					name: '商品分类',
					component: Category,
				},
				{
					path: 'brand',
					name: '品牌',
					component: Brand,
				}
			]
		},
		{
			path: '/order',
			redirect: '/order/all',
			icon: '',
			name: '订单管理',
			component: Layout,
			children: [
				{
					path: 'index',
					name: '待审核',
					component: Commodity,
					hidden: true
				}
			]
		}

	]
})
