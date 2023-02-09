import axios from 'axios';

export default class PiecesService {
	static async getPiecesList() {
		const response = await axios.get(`${process.env.REACT_APP_DOMAIN}/api/pieces`)
		return response.data
	}

	static async postPieces(newPiece) {
		const response = await axios.post(`${process.env.REACT_APP_DOMAIN}/api/pieces`, newPiece)
		return response.data
	}

	static async getPiecesById(id) {
		const response = await axios.get(`${process.env.REACT_APP_DOMAIN}/api/pieces/${id}/`)
		return response.data
	}

	static async patchPiece(id, updatedPiece) {
		const response = await axios.patch(`${process.env.REACT_APP_DOMAIN}/api/pieces/${id}/`, updatedPiece)
		return response.data
	}

	static async deletePiece(id) {
		const response = await axios.delete(`${process.env.REACT_APP_DOMAIN}/api/pieces/${id}/`)
		return response.data
	}
}