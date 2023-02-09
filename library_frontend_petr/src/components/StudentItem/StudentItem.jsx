import React from 'react'
import { useHistory } from 'react-router-dom'
import styles from './StudentItem.module.css'

export default function StudentItem({ student }) {
	const router = useHistory()
	return (
		<div className={styles.container} >
			<button className={styles.StudentItem} onClick={() => router.push(`/students/${student.id}`)} > {student.surname} {student.name} {student.patronymic} </button>
		</div>
	)
}
