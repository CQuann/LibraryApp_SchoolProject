import AuthorsService from 'API/AuthorsService'
import TextBooksService from 'API/TextBooksService'
import BookItemSec from 'components/BookItemSec/BookItemSec'
import MyInput from 'components/UI/MyInput/MyInput'
import MyLoader from 'components/UI/MyLoader/MyLoader'
import { useFetching } from 'hooks/useFetching'
import React, { useEffect, useState } from 'react'
import cn from './BringBook.module.css'

export default function BringBook() {
	const classesFilter = ['7', '8', '9', '10', '11']
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
			"release_year": 0
		}
	])
	const [query, setQuery] = useState('')

	const [getAuthors, isAuthorsLoading, authorsError] = useFetching(async () => {
		const response = await AuthorsService.getAuthorsList()
		setAuthors(response)
	})


	const [getBooks, isBooksLoading, bookError] = useFetching(async () => {
		const response = await TextBooksService.getTextbookWithFilters(classFilter, authorFilter)
		setBooks(response)
	})

	useEffect(() => {
		// @ts-ignore
		getAuthors()
		// @ts-ignore
		getBooks()
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
					<MyInput
						className={cn.search}
						value={query}
					// onChange={}
					/>
					<div className={cn.books}>
						{books.map(b =>
							<div>
								<BookItemSec book={b} />
							</div>
						)}
					</div>

				</div>
			}
		</div>

	)
}
