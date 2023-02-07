import axios from 'axios';

export default class AuthorsService {
	static async getAuthorsList() {
		const response = await axios.get(`${process.env.REACT_APP_DOMAIN}/api/authors`)
		return response.data
	}
	// static async postAuthorsList(AuthorsList) {
	// 	axios({
	// 		method: 'post',
	// 		url: `${process.env.REACT_APP_DOMAIN}/api/authors`,
	// 		// params: {
	// 		// 	user_key_id: 'USER_KEY_ID',
	// 		// 	action: 'tracking.data_save',
	// 		// 	key_id: 'KEY_ID'
	// 		// },
	// 		data: { AuthorsList },
	// 		// headers: {
	// 		// 	"Content-type": "application/x-www-form-urlencoded"
	// 		// }
	// 	})
	// }
	static async getAuthorsById(id) {
		const response = await axios.get(`${process.env.REACT_APP_DOMAIN}/api/authors/${id}`)
		return response.data
	}
}