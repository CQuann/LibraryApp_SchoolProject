import axios from 'axios';

export default class StudentsService {
	static async getStudentsList() {
		const response = await axios.get(`${process.env.REACT_APP_DOMAIN}/api/students`)
		return response.data
	}

	static async getStudentsListByClass(class_number, class_index) {
		const response = await axios.get(`${process.env.REACT_APP_DOMAIN}/api/students/?class_number=${class_number}&class_index=${class_index}`)
		return response.data
	}

	static async postStudent(newStudent) {
		const response = await axios.post(`${process.env.REACT_APP_DOMAIN}/api/students/`, newStudent)
		return response.data
	}

	static async getStudentById(id) {
		const response = await axios.get(`${process.env.REACT_APP_DOMAIN}/api/students/${id}`)
		return response.data
	}

	static async patchStudent(id, updatedStudent) {
		const response = await axios.patch(`${process.env.REACT_APP_DOMAIN}/api/students/${id}/`, updatedStudent)
		return response.data
	}

	static async deleteStudent(id) {
		const response = await axios.delete(`${process.env.REACT_APP_DOMAIN}/api/student/${id}/`)
		return response.data
	}

}