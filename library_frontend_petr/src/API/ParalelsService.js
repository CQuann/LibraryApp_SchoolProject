import axios from 'axios';

export default class ParallelsService {
	static async getParallelsList() {
		const response = await axios.get(`${process.env.REACT_APP_DOMAIN}/api/parallels`)
		return response.data
	}
}