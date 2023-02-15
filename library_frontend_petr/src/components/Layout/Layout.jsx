import styles from './Layout.module.css';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';
import React, { useEffect, useState } from 'react';
import { AuthContext } from 'context';
import { HashRouter } from 'react-router-dom';

const Layout = ({ children }) => {
	const [isAuth, setIsAuth] = useState(false);
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		if (localStorage.getItem('auth')) {
			setIsAuth(true)
		}
		setIsLoading(false)
	}, [])
	return (
		<AuthContext.Provider value={{
			isAuth,
			setIsAuth,
			isLoading
		}}>
			<HashRouter>
				<div className={styles.wrapper}>
					<Header className={styles.header} />
					<div className={styles.bodyContainer}>
						<div></div>
						<div className={styles.body}>
							{children}
						</div>
						<div></div>
					</div>
					<Footer className={styles.footer} />
				</div>
			</HashRouter>

		</AuthContext.Provider>
	)
}
export const withLayout = (Component) => {
	return function withLayoutComponent(props) {
		return (

			<Layout>
				<Component {...props} />
			</Layout>

		);
	};
};