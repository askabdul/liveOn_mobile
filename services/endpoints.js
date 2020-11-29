import config from '../config'

const baseUrl = config.baseUrl

export default {
	baseUrl: baseUrl,
	USER: baseUrl + 'userAccounts',
	LOGIN: baseUrl + 'userAccounts/user-signin',
	LOG_OUT: baseUrl + 'userAccounts/logout',
	SIGNUP: baseUrl + 'userAccounts/user-signup',
	GETRESUNIT: baseUrl + "ResponseUnits",
	POST_CASE: baseUrl + 'cases',
	POST_IMG: baseUrl + 'Storages/accident-imgs/upload'
}