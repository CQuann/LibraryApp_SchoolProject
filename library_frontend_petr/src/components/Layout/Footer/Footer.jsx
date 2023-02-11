import styles from './Footer.module.css';
import { format } from 'date-fns';
import React from 'react';

export const Footer = ({ className, ...props }) => {
	return (
		<footer {...props} className={styles.footer}>
			<div className={styles.protect}>
				LibraryApp © 2022 - {format(new Date(), 'yyyy')} Все права защищены
			</div>
			<a href='/#' target='_blank' className={styles.asign}>
				Пользовательское соглашение
			</a>
			<a href='/#' target='_blank' className={styles.confed}>
				Политика конфиденциальности
			</a>
		</footer>
	);
};