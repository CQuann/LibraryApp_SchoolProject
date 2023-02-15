import { AuthContext } from '../../../context';
import React, { useContext } from 'react';
// import { useHistory } from 'react-router-dom';
import styles from './Header.module.css';


export const Header = ({ ...props }) => {

	const { isAuth, setIsAuth } = useContext(AuthContext)

	const logout = () => {
		setIsAuth(false)
		localStorage.removeItem('auth')
	}

	return (
		isAuth
			?
			<header {...props} className={styles.head} >
				<a href='/' target='_self' className={styles.title}>
					Library App
				</a>
				<div></div>
				<a href='/editing/' target='_self' className={styles.link}>
					Редактирование
				</a>
				<a href='/help/' target='_self' className={styles.link}>
					Помощь
				</a>
				<a href='/description/' target='_self' className={styles.link}>
					Описание
				</a>
				<button className={styles.signOut} onClick={logout} >
					Выйти
				</button>
			</header>
			:
			<header {...props} className={styles.head} >
				<a href='/' target='_self' className={styles.title}>
					Library App
				</a>
				<div></div>
				<div></div>
				<div></div>
				<a href='/help/' target='_self' className={styles.link}>
					Помощь
				</a>
				<a href='/description/' target='_self' className={styles.link}>
					Описание
				</a>
			</header>
	);
};

