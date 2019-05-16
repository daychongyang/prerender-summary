import React, { Component, MouseEvent } from 'react'
import { Form, Input, Button, Checkbox } from 'antd'
import styled from 'styled-components'
import { FormComponentProps } from 'antd/lib/form/Form'
import Api from './api'
const FormItem = Form.Item

const Wrapper = styled.div`
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

interface Props extends FormComponentProps {
	name?: string
	password?: string
	remember?: boolean
}

class LoginForm extends Component<Props> {
	private handleLogin = (e: MouseEvent) => {
		e.preventDefault()
		this.props.form.validateFields(async (errs, values) => {
			Api.auth(values)
		})
	}

	public render() {
		const { getFieldDecorator } = this.props.form

		return (
			<Wrapper>
				<Form onSubmit={this.handleLogin}>
					<FormItem>
						{getFieldDecorator('name', {
							rules: [{ required: true, message: '请输入用户名!' }]
						})(<Input placeholder="用户名" />)}
					</FormItem>
					<FormItem className="decorate">
						{getFieldDecorator('password', {
							rules: [{ required: true, message: '请输入密码!' }]
						})(<Input placeholder="密码" />)}
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
			</Wrapper>
		)
	}
}

export default Form.create()(LoginForm)
