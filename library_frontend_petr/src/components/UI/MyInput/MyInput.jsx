import React from 'react'
import styles from './MyInput.module.css'

const MyInput = (props) => {
	const classes = props.className + " " + styles.MyButton
	return (
		<input className={classes} {...props} />
	);
};

export default MyInput;
