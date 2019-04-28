import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'
import routes from '~/routes/routes'
import { renderRoutes } from 'react-router-config'
export default class App extends Component {
	constructor() {
		super(...arguments)
	}

	render() {
		return (
			<Router>
				<Switch>
					{renderRoutes(routes)}
					<Redirect to="/notfound" />
				</Switch>
			</Router>
		)
	}
}
