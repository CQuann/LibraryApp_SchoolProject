// @ts-nocheck
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useFetching } from '../hooks/useFetching'
import StudentsService from '../API/StudentsService'

export default function studentPage() {
	const params = useParams()
	// const [students, setStudents] = useState([{}])


	const [getStudent, isStudentLoading, getStudentError] = useFetching(async () => {
		// @ts-ignore
		const response = await StudentsService.getStudentById(params.id)
		console.log(response)
	})

	useEffect(() => {
		// @ts-ignore
		getStudent()

	}, [])


	return (
		<div>
			{params.id}
		</div>
	)
}
