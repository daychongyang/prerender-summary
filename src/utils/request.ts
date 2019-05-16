import axios, { AxiosRequestConfig } from 'axios'
import { message } from 'antd'
import { HTTPCodes } from './http-codes'
export { AxiosRequestConfig } from 'axios'

const Service = axios.create({
	baseURL: 'localhost:9009',
	timeout: 30000,
	headers: { 'X-Custom-Header': 'foobar', withCredentials: true }
})

Service.interceptors.request.use(
	config => {
		return config
	},
	error => {
		return Promise.reject(error.message)
	}
)

Service.interceptors.response.use(
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

export const Request = async (payload: AxiosRequestConfig) => {
	const env = process.env.BUILD_ENV
	try {
		const { data } = await Service.request(payload)
	} catch (e) {
		message.error(e)
	}
}
