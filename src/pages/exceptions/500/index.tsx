import React, { Component } from 'react'
import styled from 'styled-components'
import ServerExceptionImg from 'assets/500.png'

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

export default class ServerException extends Component<Props, State> {
	render() {
		return (
			<Wrapper>
				<img
					src={ServerExceptionImg}
					alt="ServerError"
					className="img-exception"
				/>
				<div>
					<h3 className="title"> 抱歉，服务器出错了</h3>
					<p className="description">
						服务器出错了，请重新刷新页面或返回 <a href="#">首页</a>
					</p>
				</div>
			</Wrapper>
		)
	}
}
