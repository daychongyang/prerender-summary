import React, { Component, MouseEvent } from 'react'
import { Form, Input, Button, Checkbox } from 'antd'
import styled from 'styled-components'
import { FormComponentProps } from 'antd/lib/form/Form'

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	flex: 1;
	padding: 0 20px;
`

const FormWrapper = styled.div`
	min-width: 310px;
	.ant-input {
		border-radius: 0;
		border-top: 0;
		border-left: 0;
		border-right: 0;
		border-color: #ebedf2;
		letter-spacing: 2px;
		&:focus,
		&:hover {
			box-shadow: none !important;
			border-color: #ebedf2 !important;
		}
	}
	.decorate {
	}
`

const FormItem = Form.Item

interface Props extends FormComponentProps {
	name?: string
	password?: string
	remember?: boolean
}

class Login extends Component<Props> {
	private handleLogin = (e: MouseEvent) => {
		e.preventDefault()
		this.props.form.validateFields((errs, values) => {})
	}

	public render() {
		const { getFieldDecorator } = this.props.form

		return (
			<Wrapper>
				<FormWrapper>
					<Form onSubmit={this.handleLogin}>
						<FormItem>
							{getFieldDecorator('name', {
								rules: [{ required: true, message: '请输入用户名!' }]
							})(<Input placeholder="用户名" />)}
						</FormItem>
						<FormItem className="decorate">
							{getFieldDecorator('password', {
								rules: [{ required: true, message: '请输入密码!' }]
							})(<Input type="password" placeholder="密码" />)}
						</FormItem>
						<FormItem className="decorate">
							{getFieldDecorator('remember', {
								valuePropName: 'checked',
								initialValue: true
							})(<Checkbox>记住账号</Checkbox>)}
						</FormItem>
						<FormItem>
							<Button
								type="primary"
								block
								size="large"
								shape="round"
								htmlType="submit"
							>
								登 录
							</Button>
						</FormItem>
					</Form>
				</FormWrapper>
			</Wrapper>
		)
	}
}

export default Form.create()(Login)
