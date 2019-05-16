export enum HTTPCodes {
	'Bad Request' = 400,
	'Unauthorized' = 401,
	'Forbidden' = 403,
	'Not Found' = 404,
	'Method Not Allowed' = 405,
	'Request Timeout' = 408,
	'Payload Too Large' = 413,

	/** 5XX */
	'Internal Server Error' = 500,
	'Bad Gateway' = 502,
	'Service Unavailable' = 503,
	'Gateway Timeout' = 504
}
