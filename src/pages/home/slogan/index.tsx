import React from 'react'
import styled from 'styled-components'
import logo from 'assets/logo.svg'

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100%;
	flex: 1;
	position: relative;
	@media screen and (max-width: 768px) {
		display: none;
	}
`

const Slogan = styled.div`
	margin-top: 60px;
	font-weight: 500;
	font-size: 22px;
	line-height: 1.5;
	text-align: center;
	color: rgb(52, 58, 64);
`
const Shadow = styled.div`
	position: absolute;
	top: 0;
	bottom: 0;
	right: 0;
	left: 0;
	background: rgba(245, 245, 245, 0.2);
`
const SubSlogan = styled.div`
	margin-top: 30px;
	font-size: 13px;
	color: rgb(33, 37, 41);
`

export default function Introduction() {
	return (
		<Wrapper>
			<img src={logo} alt="" />
			<Slogan>
				Don`t let anyone rush you <br />
				with their timelines!
			</Slogan>
			<SubSlogan>Be patient.</SubSlogan>
			<Shadow />
		</Wrapper>
	)
}
