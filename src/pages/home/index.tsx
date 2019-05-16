import React, { Component } from 'react'
import { renderRoutes, RouteConfig } from 'react-router-config'
import styled from 'styled-components'

import Login from './login'
import Slogan from './slogan'
import Footer from 'components/footer'

import Bg from 'assets/bg.jpg'

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
	justify-content: center;
	align-items: center;
`

export default class Home extends Component<Props, State> {
	render() {
		return (
			<Wrapper>
				<Main>
					<Slogan />
					<Login />
				</Main>
				<Footer />
			</Wrapper>
		)
	}
}
