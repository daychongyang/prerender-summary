import { Request, AxiosRequestConfig } from 'utils'

export default {
	auth: (data: AxiosRequestConfig) =>
		Request({
			url: 'common/auth',
			method: 'post',
			data
		})
}
