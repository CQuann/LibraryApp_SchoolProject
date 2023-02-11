import React from 'react';
import styles from './MyButton.module.css';

const MyButton = ({ children, ...props }) => {
	const classes = props.className + " " + styles.myButton
	return (
		<button {...props} className={classes}>
			{children}
		</button>
	);
}

export default MyButton;