import load from './load'

const routes = [
	{
		path: '/',
		component: load(() => import('~/layouts/base')),
		routes: [
			{
				path: '/page1',
				name: 'page1',
				exact: true,
				component: load(() => import('~/pages/page1'))
			},
			{
				path: '/*',
				name: '404',
				exact: true,
				component: load(() => import('~/pages/404'))
			}
		]
	}
]

export default routes
