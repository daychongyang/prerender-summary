import React, { Suspense } from 'react'
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'
import { RouteConfig } from 'react-router-config'
import { Link } from 'react-router-dom'
import ErrorBoundary from './components/error-boundary'
import Loading from './components/loading'
import routes, { renderRoutes } from './routes'
import styled from 'styled-components'

interface Props {}
interface State {}

const Menu = styled.menu`
	font-size: 20px;
	a {
		margin-right: 10px;
	}
`

class App extends React.Component<Props, State> {
	render() {
		return (
			<ErrorBoundary>
				<Router>
					<Menu>
						<Link to="/">首页</Link>
						<Link to="/401">401</Link>
						<Link to="/403">403</Link>
						<Link to="/404">404</Link>
						<Link to="/500">500</Link>
						<Link to="/empty">empty</Link>
					</Menu>
					<Suspense fallback={<Loading />}>
						{renderRoutes(routes as RouteConfig[])}
					</Suspense>
				</Router>
			</ErrorBoundary>
		)
	}
}

export default App
