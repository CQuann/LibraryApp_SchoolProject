// @ts-nocheck
import { useFetching } from 'hooks/useFetching'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import StudentsService from 'API/StudentsService'
import styles from './StudentList.module.css'
import StudentItem from 'components/StudentItem/StudentItem'
import MyLoader from 'components/UI/MyLoader/MyLoader'

export default function StudentList() {

	const params = useParams()

	const [students, setStudents] = useState([{}])


	const [getStudents, isStudentsLoading, getStudentsError] = useFetching(async () => {
		// @ts-ignore
		const response = await StudentsService.getStudentsListByClass(Array.from(params.id).slice(0, -1).join(''), Array.from(params.id).slice(-1))
		setStudents(response)
	})

	useEffect(() => {
		// @ts-ignore
		getStudents()

	}, [])
	return (
		<div className="">
			{isStudentsLoading
				? <MyLoader />
				: <div className={styles.container} >
					<h1 className={styles.header} >Класс {Array.from(params.id).slice(0, -1).join('')} - {Array.from(params.id).slice(-1)}</h1>
					<div className={styles.StudentList} >
						{students.map(student =>
							<div>
								<StudentItem student={student} />
							</div>
						)}
					</div>
				</div >
			}
		</div>

	)
}
