import React, { Component } from 'react'
import { renderRoutes, RouteConfig } from 'react-router-config'

interface Props {
	[prop: string]: any
}

export default class BaseLayout extends Component<Props> {
	componentDidUpdate() {}

	public render() {
		const { routes } = this.props.route
		return <>{renderRoutes(routes as RouteConfig[])}</>
	}
}
