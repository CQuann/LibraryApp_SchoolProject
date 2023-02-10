// @ts-nocheck
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useFetching } from '../hooks/useFetching'
import StudentsService from '../API/StudentsService'
import MyLoader from '../components/UI/MyLoader/MyLoader'

export default function studentPage() {
	const params = useParams()
	const [books, setBooks] = useState([{}])
	const [aut, setAuthors] = useState([{}])
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
		setBooks(response.text_books)
		setStudent(response)
		response.text_books.authors.map(aut)
	})

	useEffect(() => {
		// @ts-ignore
		getStudent()
	}, [])


	return (
		<div>
			{/* {isStudentLoading
				? <MyLoader />
				:  */}
			<div className="">
				<h1>{student.surname} {student.name} {student.patronymic}</h1>
				<hr />
				{books.map(book =>
					<div>
						{/* <div>
									Авторы:
									{console.log(book.authors)}
									{book.authors.map(aut =>
										console.log(aut)
										<div>
											{aut.name}
										</div>
									)}
								</div> */}
						<div>
							Название:
							{book.name}
						</div>
						<div>
							Выдается в классе:
							{book.class_number}
						</div>
						<div>
							Выпущена в {book.release_year} году
						</div>
						<hr />
					</div>
				)}
			</div>
			{/* } */}
		</div>
	)
}
