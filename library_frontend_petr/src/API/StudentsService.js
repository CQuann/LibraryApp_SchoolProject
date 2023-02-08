import axios from 'axios';

export default class StudentsService {
	static async getStudentsList() {
		const response = await axios.get(`${process.env.REACT_APP_DOMAIN}/api/students`)
		return response.data
	}
	static async getStudentById(id) {
		const response = await axios.get(`${process.env.REACT_APP_DOMAIN}/api/students/${id}`)
		return response.data
	}
}