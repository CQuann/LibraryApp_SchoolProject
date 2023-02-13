import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from './Header.module.css';


export const Header = ({ ...props }) => {
	let router = useHistory()
	const a = () => {

	}


	return (
		<header {...props} className={styles.head} >
			<a href='/classes' target='_self' className={styles.title}>
				Library App
			</a>
			<div></div>
			<a href='/editing/' target='_self' className={styles.page1}>
				Редактирование
			</a>
			<a href='/#' target='_blank' className={styles.page2}>
				page2
			</a>
			<a href='/#' target='_blank' className={styles.page3}>
				page3
			</a>
		</header>
	);
};