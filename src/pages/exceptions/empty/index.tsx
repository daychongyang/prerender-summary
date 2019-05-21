import React, { Component } from 'react'
import styled from 'styled-components'
import Empty from 'assets/empty.png'
interface Props {}
interface State {}

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
	@media screen and (max-width: 720px) {
		flex-direction: column;
		.img-exception {
			max-width: 280px;
			margin-right: 10px;
		}
		.title {
			font-size: 18px;
			margin: 40px 0 10px 0;
		}
		.description {
			font-size: 12px;
		}
	}

	@media screen and (min-width: 721px) and (max-width: 1199px) {
		.img-exception {
			max-width: 180px;
			margin-right: 30px;
		}
		.title {
			font-size: 20px;
			margin: 10px 0;
		}
		.description {
			font-size: 14px;
		}
	}

	@media screen and (min-width: 1200px) {
		.img-exception {
			max-width: 260px;
			margin-right: 50px;
		}
		.title {
			font-size: 24px;
			margin: 20px 0;
		}
		.description {
			font-size: 16px;
		}
	}
`

export default class Home extends Component<Props, State> {
	render() {
		return (
			<Wrapper>
				<img src={Empty} alt="empty" className="img-exception" />
				<div>
					<h3 className="title">页面暂无内容</h3>
					<p className="description">抱歉，页面暂无内容，请看看其他页面</p>
				</div>
			</Wrapper>
		)
	}
}
