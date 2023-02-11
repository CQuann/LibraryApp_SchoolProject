import StudentsService from 'API/StudentsService'
import BookItem from 'components/BookItem/BookItem'
import MyModal from 'components/UI/modal/MyModal'
import MyButton from 'components/UI/MyButton/MyButton'
import { useFetching } from 'hooks/useFetching'
import React, { useEffect, useState } from 'react'
import styles from './BookList.module.css'

export default function BookList({ studentId }) {

	const [StudentBooks, setBooks] = useState([
		{
			"id": 0,
			"authors": [
				{
					"id": 0,
					"name": ""
				},
				{
					"id": 0,
					"name": ""
				}
			],
			"name": "",
			"class_number": "0",
			"release_year": 0
		}
	])
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
	const [modal, setModal] = useState(false);


	const [deleteBook, isBookDeletind, BookDeletindError] = useFetching(async (id, updatedStudent) => {
		const response = await StudentsService.patchStudent(id, updatedStudent)
	})
	const [getStudent, isStudentLoading, StudentLoadingError] = useFetching(async (StudentId) => {
		const response = await StudentsService.getStudentById(StudentId)
		// @ts-ignore
		setBooks(response.text_books)
		setStudent(response)
	})

	const delBook = (id) => {
		if (window.confirm('Вы уверены?')) {
			const a = []
			Array.from(StudentBooks).map(b => {
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
		<div className={styles.container} >
			<h1 className={styles.header} >{student.surname} {student.name} {student.patronymic} ({student.class_number}-{student.class_index})</h1>
			<MyButton className={styles.btn0} onClick={() => setModal(true)}>
				Взять книгу
			</MyButton>
			<MyModal visible={modal} setVisible={setModal}>
				hello
			</MyModal>
			{StudentBooks.map(book =>
				<div className={styles.book} >
					<BookItem book={book} id={student.id} books={StudentBooks} />
					<MyButton className={styles.btn1} onClick={() => delBook(book.id)} >
						{student.name} принес "{book.name}"
					</MyButton>
				</div>
			)}
		</div>
	)
}
