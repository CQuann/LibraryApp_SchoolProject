import MyButton from 'components/UI/MyButton/MyButton';
import React from 'react'
import { useHistory } from 'react-router-dom';
import classes from './ClassItem.module.css';

export default function ClassItem({ cls, parallel }) {

	const router = useHistory()


	return (
		<button
			className={classes.classItem}
			onClick={() => router.push(`/classes/${cls}${parallel}`)}
		>
			{cls} - {parallel}
		</button>
	)
}
