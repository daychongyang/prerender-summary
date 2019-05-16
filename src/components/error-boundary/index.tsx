import React, { Component, ErrorInfo } from 'react'

type State = {
	hasError: boolean
	error: Error | null
}

type Props = {}

export default class ErrorBoundary extends Component<Props, State> {
	constructor(props: object) {
		super(props)
		this.state = { hasError: false, error: null }
	}

	static getDerivedStateFromError(error: Error) {
		// Update state so the next render will show the fallback UI.
		return { hasError: true }
	}

	componentDidCatch(error: Error, info: ErrorInfo) {
		this.setState({
			error
		})
		// You can also log the error to an error reporting service
	}

	render() {
		const { error, hasError } = this.state
		if (hasError) {
			// You can render any custom fallback UI
			return <h1>{String(error)}</h1>
		}

		return this.props.children
	}
}
