import React, { Suspense } from 'react'
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'
import { RouteConfig } from 'react-router-config'
import ErrorBoundary from './components/error-boundary'
import Loading from './components/loading'
import routes, { renderRoutes } from './routes'

interface Props {}
interface State {}

class App extends React.Component<Props, State> {
	render() {
		return (
			<ErrorBoundary>
				<Router>
					<Suspense fallback={<Loading />}>
						{renderRoutes(routes as RouteConfig[])}
					</Suspense>
				</Router>
			</ErrorBoundary>
		)
	}
}

export default App
