/* eslint-disable react-hooks/rules-of-hooks */
import ParallelsService from '../API/ParallelsService'
import React, { useEffect, useState } from 'react'
import { useFetching } from '../hooks/useFetching'
import ClassList from '../components/ClassList/ClassList'
import StudentsService from 'API/StudentsService'


export default function cllasses() {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const [parallels, setParallels] = useState([{ main_class: 0, parallel_numbers: 0 }])

	const [getParallelsList, isParallelsListLoading, ParallelsListError] = useFetching(async () => {
		const response = ParallelsService.getParallelsList()
		setParallels(await response)
	})



	useEffect(() => {
		// @ts-ignore
		getParallelsList()
	}, [])

	return (
		<div  >
			{parallels.map(mc =>
				// @ts-ignore
				<ClassList number_of_parallels={[...Array(mc.parallel_numbers).keys()]} main_class={mc.main_class} />
			)}
		</div>
	);
}
