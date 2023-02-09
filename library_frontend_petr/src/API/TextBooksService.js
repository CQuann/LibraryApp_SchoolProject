import axios from 'axios';

export default class JustbooksService {
	static async getTextbooksList() {
		const response = await axios.get(`${process.env.REACT_APP_DOMAIN}/api/textbook`)
		return response.data
	}

	static async postTextbook(newTextbook) {
		const response = await axios.post(`${process.env.REACT_APP_DOMAIN}/api/textbook/`, newTextbook)
		return response.data
	}

	static async getTextbookById(id) {
		const response = await axios.get(`${process.env.REACT_APP_DOMAIN}/api/textbook/${id}`)
		return response.data
	}

	static async patchTextbook(id, updatedTextbook) {
		const response = await axios.patch(`${process.env.REACT_APP_DOMAIN}/api/textbook/${id}`, updatedTextbook)
		return response.data
	}

	static async deleteTextbook(id) {
		const response = await axios.delete(`${process.env.REACT_APP_DOMAIN}/api/textbook/${id}`)
		return response.data
	}
}