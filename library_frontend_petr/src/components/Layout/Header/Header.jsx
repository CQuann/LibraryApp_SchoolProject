import { AuthContext } from '../../../context';
import React, { useContext } from 'react';
// import { useHistory } from 'react-router-dom';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';


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
				<Link to='/' className={styles.title}>
					Library App
				</Link>
				<div></div>
				<Link to='/editing' className={styles.link}>
					Редактирование
				</Link>
				<Link to='/help' className={styles.link}>
					Помощь
				</Link>
				<Link to='/about' className={styles.link}>
					Описание
				</Link>
				<button className={styles.signOut} onClick={logout} >
					Выйти
				</button>
			</header>
			:
			<header {...props} className={styles.head} >
				<Link to='/' className={styles.title}>
					Library App
				</Link>
				<div></div>
				<div></div>
				<div></div>
				<Link to='/help' className={styles.link}>
					Помощь
				</Link>
				<Link to='/about' className={styles.link}>
					Описание
				</Link>
			</header>
	);
};

