import { lazy } from 'react'

export default [
	{
		name: '登录',
		path: '/',
		component: lazy(() => import(/* webpackChunkName: 'login'*/ 'pages/home'))
	}
]
