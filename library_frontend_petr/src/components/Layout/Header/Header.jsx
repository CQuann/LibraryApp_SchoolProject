import React from 'react';
import styles from './Header.module.css';


export const Header = ({ ...props }) => {
	return (
		<header {...props} className={styles.head} >
			<h1>
				Library App
			</h1>
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