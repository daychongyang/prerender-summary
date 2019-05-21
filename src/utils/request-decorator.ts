import Axios, { AxiosRequestConfig } from 'axios'

type requestConfig = Array<AxiosRequestConfig | string>

export const GET = (...requestConfig: requestConfig) => {
	console.log(requestConfig)
	return _Request(requestConfig)
}

const _Request = (args: requestConfig) => (
	target: any,
	property: any,
	descriptor: any
) => {
	console.log(target, property, descriptor)
}
