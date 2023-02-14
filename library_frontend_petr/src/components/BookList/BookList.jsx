import StudentsService from 'API/StudentsService'
import MyLoader from 'components/UI/MyLoader/MyLoader'
import { useFetching } from 'hooks/useFetching'
import React, { useEffect, useState } from 'react'
import styles from './BookList.module.css'
import { useHistory } from 'react-router-dom';
import BookItemSec from 'components/BookItemSec/BookItemSec'

export default function BookList({ studentId }) {
	const router = useHistory()
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

	const [deleteBook, isBookDeletind, BookDeletindError] = useFetching(async (id, updatedStudent) => {
		const response = await StudentsService.patchStudent(id, updatedStudent)
<<<<<<< HEAD

                console.log(response)

=======
>>>>>>> 93882288812efa65dfc270fbabcdd0eea836d26b
		setStudent(response)
	})
	const [getStudent, isStudentLoading, StudentLoadingError] = useFetching(async (StudentId) => {
		const response = await StudentsService.getStudentById(StudentId)
		setStudent(response)
	})

	const delBook = (id) => {
		if (window.confirm('Вы уверены?')) {
			const a = []
			Array.from(student.text_books).map(b => {
				if (b.id !== id) {
					a.push(b)
				}
			})
			student.text_books = a
			// @ts-ignore
			deleteBook(student.id, student)
		}
		else {
			return
		}

	}

	useEffect(() => {
		// @ts-ignore
		getStudent(studentId)
	}, [])

	return (
		<div className="">
			{isBookDeletind || isStudentLoading
				? <MyLoader />
				: <div className={styles.container} >
					<h1 className={styles.header} >{student.surname} {student.name} {student.patronymic} ({student.class_number}-{student.class_index}):</h1>
					<button className={styles.btn0} onClick={() => router.push(`/bringBook/${student.id}`)}>
						Добавить книгу
					</button>
<<<<<<< HEAD
					{studentBooks.map(book =>
						<div className={styles.book} >
							<BookItemSec book={book} />
							<button className={styles.btn1} onClick={() => delBook(book.id)} >
								{student.name} принес "{book.name}"
							</button>
						</div>
					)}
=======
					<div>
						{
							student.text_books.map(b =>
								<div className={styles.book} >
									<BookItemSec book={b} />
									<button className={styles.btn1} onClick={() => delBook(b.id)} >
										{student.name} принес "{b.name}"
									</button>
								</div>
							)
						}
					</div>
>>>>>>> 93882288812efa65dfc270fbabcdd0eea836d26b
				</div>
			}
		</div>

	)
}
