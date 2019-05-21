import { lazy } from 'react'

export default [
	{
		name: '首页',
		path: '/',
		exact: true,
		component: lazy(() => import(/* webpackChunkName: 'login'*/ 'pages/home'))
	},
	{
		name: '登录',
		path: '/login',
		auth: 'AMS_场次',
		exact: true,
		component: lazy(() => import(/* webpackChunkName: 'login'*/ 'pages/login'))
	},
	{
		name: '注册',
		path: '/register',
		exact: true,
		component: lazy(() =>
			import(/* webpackChunkName: 'register'*/ 'pages/register')
		)
	}
]
