import { lazy } from 'react'

export default [
	{
		name: 'empty',
		path: '/empty',
		component: lazy(() =>
			import(/* webpackChunkName: 'empty'*/ 'pages/exceptions/empty')
		)
	},
	{
		name: '403',
		path: '/403',
		component: lazy(() =>
			import(/* webpackChunkName: '403'*/ 'pages/exceptions/403')
		)
	},
	{
		name: '404',
		path: '/404',
		component: lazy(() =>
			import(/* webpackChunkName: '404'*/ 'pages/exceptions/404')
		)
	},
	{
		name: '500',
		path: '/500',
		component: lazy(() =>
			import(/* webpackChunkName: '500'*/ 'pages/exceptions/500')
		)
	}
]
