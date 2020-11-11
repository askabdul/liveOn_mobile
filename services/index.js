import axios from 'axios'
// import lodash from 'lodash'
import endpoints from './endpoints'
import config from './../config'

axios.defaults.baseURL = config.baseUrl

export default {
	endpoints,
	axios,
	// lodash
}