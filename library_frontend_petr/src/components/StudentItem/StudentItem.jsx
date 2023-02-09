import React from 'react'
import styles from './StudentItem.module.css'

export default function StudentItem({ student }) {
	return (
		<div className={styles.StudentItem} >
			{student.name} {student.patronymic} {student.surname}
		</div>
	)
}
