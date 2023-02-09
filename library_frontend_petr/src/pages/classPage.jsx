// @ts-nocheck
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react'
import StudentList from '../components/StudentList/StudentList'
import { useFetching } from '../hooks/useFetching'

export default function classPage() {

	return (
		<div>
			<StudentList />
		</div>
	)
}
