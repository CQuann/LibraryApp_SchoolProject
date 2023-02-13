import axios from 'axios';

export default class JustbooksService {
	static async getTextbooksList() {
		const response = await axios.get(`${process.env.REACT_APP_DOMAIN}/api/textbooks`)
		return response.data
	}

	static async postTextbook(newTextbook) {
		const response = await axios.post(`${process.env.REACT_APP_DOMAIN}/api/textbooks/`, newTextbook)
		return response.data
	}

	static async getTextbookById(id) {
		const response = await axios.get(`${process.env.REACT_APP_DOMAIN}/api/textbooks/${id}/`)
		return response.data
	}

	static async patchTextbook(id, updatedTextbook) {
		const response = await axios.patch(`${process.env.REACT_APP_DOMAIN}/api/textbooks/${id}/`, updatedTextbook)
		return response.data
	}

	static async deleteTextbook(id) {
		const response = await axios.delete(`${process.env.REACT_APP_DOMAIN}/api/textbooks/${id}/`)
		return response.data
	}
	static async getTextbookWithFilters(class_number, authors, name) {
		if (class_number && authors && name) {
			const response = await axios.get(`${process.env.REACT_APP_DOMAIN}/api/textbooks/?class_number=${class_number}&authors=${authors}&name=${name}`)
			return response.data
		} if (class_number && name && !authors) {
			const response = await axios.get(`${process.env.REACT_APP_DOMAIN}/api/textbooks/?class_number=${class_number}&name=${name}`)
			return response.data
		} if (class_number && authors && !name) {
			const response = await axios.get(`${process.env.REACT_APP_DOMAIN}/api/textbooks/?authors=${authors}&class_number=${class_number}`)
			return response.data
		} if (name && authors && !class_number) {
			const response = await axios.get(`${process.env.REACT_APP_DOMAIN}/api/textbooks/?authors=${authors}&name=${name}`)
			return response.data
		} if (class_number && !name && !authors) {
			const response = await axios.get(`${process.env.REACT_APP_DOMAIN}/api/textbooks/?class_number=${class_number}`)
			return response.data
		} if (!class_number && authors && !name) {
			const response = await axios.get(`${process.env.REACT_APP_DOMAIN}/api/textbooks/?authors=${authors}`)
			return response.data
		} if (name && !authors && !class_number) {
			const response = await axios.get(`${process.env.REACT_APP_DOMAIN}/api/textbooks/?name=${name}`)
			return response.data
		} else {
			const response = await axios.get(`${process.env.REACT_APP_DOMAIN}/api/textbooks`)
			return response.data
		}

	}
}