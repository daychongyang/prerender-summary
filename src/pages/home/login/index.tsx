import React, { Component } from 'react'
import styled from 'styled-components'
import LoginForm from 'components/login'

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	flex: 1;
	padding: 0 20px;
`

export default class Login extends Component {
	render() {
		return (
			<Wrapper>
				<LoginForm />
			</Wrapper>
		)
	}
}
