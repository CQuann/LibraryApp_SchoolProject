import React from 'react';
import styles from './Header.module.css';


export const Header = ({ ...props }) => {
	return (
		<header {...props} className={styles.head} >
			<h1>
				Library App
			</h1>
			<div></div>
			<a href='/#' target='_blank' className={styles.page1}>
				page1
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