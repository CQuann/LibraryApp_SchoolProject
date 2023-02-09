import axios from 'axios';

export default class JustbooksService {
	static async getJustbooksList() {
		const response = await axios.get(`${process.env.REACT_APP_DOMAIN}/api/justbook`)
		return response.data
	}

	static async postJustbook(newJustbook) {
		const response = await axios.post(`${process.env.REACT_APP_DOMAIN}/api/justbook/`, newJustbook)
		return response.data
	}

	static async getJustbookById(id) {
		const response = await axios.get(`${process.env.REACT_APP_DOMAIN}/api/justbook/${id}`)
		return response.data
	}

	static async patchJustbook(id, updatedJustbook) {
		const response = await axios.patch(`${process.env.REACT_APP_DOMAIN}/api/justbook/${id}`, updatedJustbook)
		return response.data
	}

	static async deleteJustbook(id) {
		const response = await axios.delete(`${process.env.REACT_APP_DOMAIN}/api/justbook/${id}`)
		return response.data
	}
}