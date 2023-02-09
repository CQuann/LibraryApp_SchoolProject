import axios from 'axios';

export default class ParallelsService {
	static async getParallelsList() {
		const response = await axios.get(`${process.env.REACT_APP_DOMAIN}/api/parallels`)
		return response.data
	}
	static async getParallelsById(id) {
		const response = await axios.get(`${process.env.REACT_APP_DOMAIN}/api/parallels/${id}`)
		return response.data
	}
	static async patchParallelPatch(id, updatedParallel) {
		const response = await axios.patch(`${process.env.REACT_APP_DOMAIN}/api/parallels/${id}`, updatedParallel)
		return response.data
	}
}