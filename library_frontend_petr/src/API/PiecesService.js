import axios from 'axios';

export default class PiecesService {
	static async getPiecesList() {
		const response = await axios.get(`${process.env.REACT_APP_DOMAIN}/api/pieces`)
		return response.data
	}
}