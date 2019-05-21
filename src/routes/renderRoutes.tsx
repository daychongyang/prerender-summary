import React from 'react'
import { RouteConfig } from 'react-router-config'
import { Switch, Route, Redirect } from 'react-router-dom'
interface parmas {
	route: RouteConfig
	[key: string]: any
}

interface auth {
	(parmas: parmas): JSX.Element
}

export const renderRoutes = (
	routes: RouteConfig[],
	extraProps = {},
	switchProps = {}
) => {
	const auth: auth = ({ route, ...props }) => {
		if (true) {
			return <route.component {...props} route={route} />
		}

		return <Redirect to="/403" />
	}

	return routes ? (
		<Switch {...switchProps}>
			{routes.map((route, i) => (
				<Route
					key={route.key || i}
					path={route.path}
					exact={route.exact}
					strict={route.strict}
					render={props =>
						route.auth ? (
							auth({ ...props, ...extraProps, route: route })
						) : (
							<route.component {...props} {...extraProps} route={route} />
						)
					}
				/>
			))}
			<Redirect to="/404" />
		</Switch>
	) : null
}
