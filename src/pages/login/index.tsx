import React, { Component } from 'react'
import Slogan from './slogan'
import Login from './login'
import Footer from 'components/footer'
import styled from 'styled-components'
import Bg from 'assets/bg.jpg'
import { GET } from 'utils'

interface Props {
	[prop: string]: any
}

interface State {}

const Wrapper = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	background: url(${Bg}) no-repeat;
	background-size: contain;
	background-position: bottom;
`

const Main = styled.main`
	display: flex;
	height: 100%;
`

export default class Home extends Component<Props, State> {
	componentDidMount() {
		this.handleQuery()
	}

	@GET('/common')
	handleQuery() {
		console.log(1)
	}

	render() {
		const { routes } = this.props.route

		return (
			<Wrapper>
				<Main>
					{/* <Slogan /> */}
					<Login />
				</Main>
				<Footer />
			</Wrapper>
		)
	}
}
