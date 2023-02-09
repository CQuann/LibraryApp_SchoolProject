import ClassItem from 'components/ClassItem/ClassItem'
import React from 'react'
import classes from './ClassList.module.css'

export default function ClassList(arr, main_class) {

	// console.log(arr.number_of_parallels, arr.main_class)

	return (
		<div>
			<div className={classes.container}>
				{arr.number_of_parallels.map(cl =>
					<ClassItem cls={arr.main_class} parallel={cl + 1} />
				)}
			</div>
		</div>
	)
}
