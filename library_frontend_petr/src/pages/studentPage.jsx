/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useFetching } from '../hooks/useFetching'
import StudentsService from '../API/StudentsService'
import MyLoader from '../components/UI/MyLoader/MyLoader'
import BookList from '../components/BookList/BookList'

export default function studentPage() {
	const params = useParams()
	const [student, setStudent] = useState({
		"id": 0,
		"text_books": [
			{
				"id": 0,
				"authors": [
					{
						"id": 0,
						"name": ""
					}
				],
				"name": "",
				"class_number": "",
				"release_year": 0
			}
		],
		"just_books": [
			{
				"id": 0,
				"authors": [],
				"pieces": [],
				"name": ""
			}
		],
		"surname": "",
		"name": "",
		"patronymic": "",
		"class_number": 0,
		"class_index": 0
	})


	const [getStudent, isStudentLoading, getStudentError] = useFetching(async () => {
		// @ts-ignore
		const response = await StudentsService.getStudentById(params.id)
		setStudent(response)
	})

	useEffect(() => {
		// @ts-ignore
		getStudent()
	}, [])


	return (
		<div>
			{isStudentLoading
				? <MyLoader />
				:
				<div className="">
					<BookList studentId={student.id} />
				</div>
			}
		</div>
	)
}
