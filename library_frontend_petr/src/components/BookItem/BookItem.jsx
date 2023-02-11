import StudentsService from 'API/StudentsService'
import BookItemUpdating from 'components/BookItemUpdating/BookItemUpdating'
import MyModal from 'components/UI/modal/MyModal'
import MyButton from 'components/UI/MyButton/MyButton'
import { useFetching } from 'hooks/useFetching'
import React, { useState } from 'react'
import styles from './BookItem.module.css'

export default function BookItem({ book, books, id }) {



	return (
		<div className={styles.container} >
			<div className={styles.smth}>
				Название:
			</div>
			<div className={styles.smth}>
				{book.name}
			</div>
			<div className={styles.smth}>
				Авторы:
			</div>
			<div>
				<div className={styles.smth}>
					{book.authors.map(aut =>
						<div>
							{aut.name}
						</div>
					)}
				</div>
			</div>
			<div className={styles.smth}>
				Выдается в классе:
			</div>
			<div className={styles.smth} >
				{book.class_number}
			</div>
			<div className={styles.smth}>
				Выпущена в {book.release_year} году
			</div>
			<div className={styles.smth}>
				Взята:
				{/* {book.} */}
			</div>
		</div>


	)
}
