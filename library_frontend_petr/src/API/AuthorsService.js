import axios from 'axios';

export default class AuthorsService {
	static async getAuthorsList() {
		const response = await axios.get(`${process.env.REACT_APP_DOMAIN}/api/authors/`)
		return response.data
	}

	static async postAuthor(newAuthor) {
		const response = await axios.post(`${process.env.REACT_APP_DOMAIN}/api/authors/`, newAuthor)
		return response.data
	}

	static async getAuthorsById(id) {
		const response = await axios.get(`${process.env.REACT_APP_DOMAIN}/api/authors/${id}/`)
		return response.data
	}

	static async patchAuthor(id, updatedAuthor) {
		const response = await axios.patch(`${process.env.REACT_APP_DOMAIN}/api/authors/${id}/`, updatedAuthor)
		return response.data
	}

	static async deleteAuthor(id) {
		const response = await axios.delete(`${process.env.REACT_APP_DOMAIN}/api/authors/${id}/`)
		return response.data
	}
}