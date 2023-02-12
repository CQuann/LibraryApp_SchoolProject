import AuthorsService from 'API/AuthorsService'
import StudentsService from 'API/StudentsService'
import TextBooksService from 'API/TextBooksService'
import BookItemSec from 'components/BookItemSec/BookItemSec'
import MyButton from 'components/UI/MyButton/MyButton'
import MyInput from 'components/UI/MyInput/MyInput'
import MyLoader from 'components/UI/MyLoader/MyLoader'
import { useFetching } from 'hooks/useFetching'
import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import cn from './BringBook.module.css'

export default function BringBook() {
	const classesFilter = ['7', '8', '9', '10', '11']
	const params = useParams()
	const router = useHistory()
	const [classFilter, setClassFilter] = useState('')
	const [authors, setAuthors] = useState([{
		id: 0,
		name: ''
	}])
	const [authorFilter, setAuthorFilter] = useState('')
	const [books, setBooks] = useState([
		{
			"id": 0,
			"authors": [
				{
					"id": 1,
					"name": ""
				},
				{
					"id": 2,
					"name": ""
				}
			],
			"name": "",
			"class_number": "0",
			"release_year": 0,
			"amount": 0
		}
	])
	const [query, setQuery] = useState('')
	const [student, setStudent] = useState({
		"id": 4,
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
				"release_year": 0,
				"amount": 0
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

	const [getAuthors, isAuthorsLoading, authorsError] = useFetching(async () => {
		const response = await AuthorsService.getAuthorsList()
		setAuthors(response)
	})


	const [getBooks, isBooksLoading, bookError] = useFetching(async () => {
		const response = await TextBooksService.getTextbookWithFilters(classFilter, authorFilter)
		setBooks(response)
	})

	const [getStudentBooks, isStudentBooksLoading, studentBooksError] = useFetching(async () => {
		// @ts-ignore
		const response = await StudentsService.getStudentById(params.id)
		setStudent(response)
	})

	const [bringBook, isBookBringing, bringBookError] = useFetching(async (updatedStudent) => {
		// @ts-ignore
		const response = await StudentsService.patchStudent(params.id, updatedStudent)
		// @ts-ignore
		router.push(`/students/${params.id}`)
	})

	useEffect(() => {
		// @ts-ignore
		getAuthors()
		// @ts-ignore
		getBooks()
		//@ts-ignore
		getStudentBooks()
	}, [])

	useEffect(() => {
		// @ts-ignore
		getBooks()
	}, [classFilter, authorFilter])

	function changeClassFilter(event) {
		setClassFilter(event.target.value);
	}

	function changeAuthorsFilter(event) {
		setAuthorFilter(event.target.value);
	}

	const addBook = (addingBook) => {
		if (window.confirm('Вы уверены?')) {
			const a = []
			Array.from(student.text_books).map(b => {
				a.push(b)
			})
			a.push(addingBook)
			student.text_books = a
			// @ts-ignore
			bringBook(student)
		}
		else {
			return
		}

	}

	return (
		<div className={cn.wrapper}>
			{isAuthorsLoading || isBooksLoading
				? <MyLoader />
				: <div className={cn.container} >
					<h1 className={cn.header} >Фильтр по классам</h1>
					<select value={classFilter} onChange={changeClassFilter} className={cn.classFilter} >
						{classesFilter.map(classOption =>
							<option>
								{classOption}
							</option>
						)}
					</select>
					<h1 className={cn.header} >Фильтр по авторам</h1>
					<select value={authorFilter} onChange={changeAuthorsFilter} className={cn.authorFilter} >
						{authors.map(author =>
							<option>
								{author.name}
							</option>
						)}
					</select>
					<h1 className={cn.header} >Поиск</h1>
					<MyInput
						style={{ marginTop: -5 }}
						value={query}
						onChange={(event) => setQuery(event.target.value)}
					/>
					<p>
						{query}
					</p>
					<div className={cn.books}>
						{books.map(b =>
							<div className={cn.bookContainer} >
								<BookItemSec book={b} />
								<MyButton onClick={() => addBook(b)} >
									Добавить книгу
								</MyButton>
							</div>
						)}
					</div>

				</div>
			}
		</div>

	)
}
