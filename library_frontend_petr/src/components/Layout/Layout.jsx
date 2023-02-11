import styles from './Layout.module.css';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';
import React, { } from 'react';

const Layout = ({ children }) => {
	return (
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