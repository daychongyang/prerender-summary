import React from 'react'
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import PropTypes from 'prop-types'

export default class BaseLayout extends React.Component {
	static propTypes = {
		route: PropTypes.object.isRequired
	}

	componentDidMount() {
		console.log(1)
		this.forceUpdate()
	}

	state = {}

	getRedirect = () => {
		let { route } = this.props
		let redirects = []
		if (route.redirect) {
			redirects.push(
				<Redirect
					exact
					key={route.path}
					from={route.path}
					to={route.redirect}
				/>
			)
		}
		route.routes.forEach(item => {
			if (item.redirect) {
				redirects.push(
					<Redirect exact key={item.path} from={item.path} to={item.redirect} />
				)
			}
		})
		return redirects
	}

	render() {
		const { route } = this.props
		console.log(this.props.route)
		return (
			<Router>
				<Switch>
					{this.getRedirect()}
					{renderRoutes(route.routes)}
				</Switch>
			</Router>
		)
	}
}
