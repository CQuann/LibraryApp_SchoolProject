import React, { useState } from 'react'

export default function CreateStudent({ createStudent }) {
	const [student, setStudent] = useState({
		class_index: 0,
		class_number: 0,
		id: 0,
		just_books:
			[{
				id: 0,
				authors: [{
					id: 0,
					name: ''
				}],
				pieces: [{
					id: 0,
					author: {
						id: 0,
						name: ''
					}
				}],
				name: ''
			}],
		name: '',
		patronymic: '',
		surname: ''
	})

	const addNewStudent = (e) => {
		e.preventDefault()
		const newStudent = {

		}
		createStudent(newStudent)

	}

	return (
		<div>

		</div>
	)
}
