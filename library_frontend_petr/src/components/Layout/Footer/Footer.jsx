import styles from './Footer.module.css';
import { format } from 'date-fns';
import React from 'react';

export const Footer = ({ className, ...props }) => {
	return (
		<footer {...props} className={styles.footer}>
			<div className={styles.protect}>
				LibraryApp © 2022 - {format(new Date(), 'yyyy')} Все права защищены
			</div>
			<div className={styles.asign}>
				Степанов Пётр
			</div>
			<div className={styles.confed}>
				Крылов Григорий
			</div>
		</footer>
	);
};