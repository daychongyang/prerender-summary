import React, { Component } from 'react'
import styled from 'styled-components'
import NotFoundImg from 'assets/404.png'
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

export default class NotFound extends Component<Props, State> {
	render() {
		return (
			<Wrapper>
				<img src={NotFoundImg} alt="NotFound" className="img-exception" />
				<div>
					<h3 className="title">抱歉，你访问的页面不存在</h3>
					<p className="description">
						您要找的页面没有找到，请返回 <a href="/">首页</a> 继续浏览
					</p>
				</div>
			</Wrapper>
		)
	}
}
