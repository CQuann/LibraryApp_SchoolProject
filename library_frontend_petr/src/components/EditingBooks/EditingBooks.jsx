import TextBooksService from 'API/TextBooksService'
import BookItemSec from 'components/BookItemSec/BookItemSec'
import MyButton from 'components/UI/MyButton/MyButton'
import { useFetching } from 'hooks/useFetching'
import React, { useEffect, useState } from 'react'
import cn from './EditingBooks.module.css'

export default function EditingBooks() {
	const [books, setBooks] = useState(
		[
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
				"amount": 1
			}
		]
	)

	const [getBooks, isBooksLoading, bookError] = useFetching(async () => {
		const response = await TextBooksService.getTextbooksList()
		// @ts-ignore
		setBooks(response)
	})

	const [patchAmount, isAmountPatching, amountPatchingError] = useFetching(async (id, patchedBook) => {
		const response = await TextBooksService.patchTextbook(id, patchedBook)
	})

	const plusBook = (idBook) => {
		let book = {}
		books.map(b => {
			if (b.id == idBook) {
				book = b
			}
		})
		book.amount += 1
		console.log(book)
		// @ts-ignore
		patchAmount(idBook, book)
	}

	const minusBook = (idBook) => {
		let book = {}
		books.map(b => {
			if (b.id == idBook) {
				book = b
			}
		})
		book.amount -= 1
		console.log(book)
		// @ts-ignore
		patchAmount(idBook, book)
		console.log(idBook)
	}

	useEffect(() => {
		// @ts-ignore
		getBooks()
	}, [])


	return (
		<div>
			{
				Array.from(books).map(b =>
					<div className={cn.wrapper}>
						<div className={cn.bookWrapper}>
							<BookItemSec book={b} />
						</div>
						<div className={cn.amountWrapper}>
							<div className={cn.amount} >
								Количество учебника "{b.name}": {b.amount}
							</div>
							<div className={cn.btnWrapper} >
								<button className={cn.btns} onClick={() => plusBook(b.id)} >
									+
								</button>
								<button className={cn.btns} onClick={() => minusBook(b.id)} >
									-
								</button>
							</div>

						</div>
					</div>
				)
			}
		</div>
	)
}
