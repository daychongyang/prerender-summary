import { BUILD_ENV } from './env'

type environments = {
	[environmentName in 'development' | 'production']?: string
}

interface apis {
	[apiName: string]: environments
}

const apis: apis = {
	api: {
		development: 'localhost:9009'
	}
}

export default ''
