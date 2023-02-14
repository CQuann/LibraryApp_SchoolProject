import axios from 'axios'

export default class LoginService {
	static async getLoginPass() {
		const response = await axios.get(`${process.env.REACT_APP_DOMAIN}/api/authorization`)
		return response.data
	}
}