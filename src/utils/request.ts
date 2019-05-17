import Axios, { AxiosRequestConfig, AxiosInstance } from 'axios'
import { message } from 'antd'
import { HTTPCodes } from './http-codes'
import baseURL from './base-url'
export { AxiosRequestConfig } from 'axios'

const axios = Axios.create({
	baseURL,
	timeout: 30000,
	headers: { 'X-Custom-Header': 'foobar', withCredentials: true }
})

axios.interceptors.request.use(
	config => {
		return config
	},
	error => {
		return Promise.reject(error.message)
	}
)

axios.interceptors.response.use(
	response => {
		return response
	},
	error => {
		if (error.response) {
			let { status } = error.response
			message.error(HTTPCodes[status])
		}
	}
)

export const GET = (url: string) => () => ''

export const POST = (url: string) => () => ''
