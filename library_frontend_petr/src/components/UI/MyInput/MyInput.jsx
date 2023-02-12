import React from 'react'
import styles from './MyInput.module.css'

const MyInput = (props) => {
	// const classes = props.className + " " + styles.myInput
	return (
		<input className={styles.myInput} {...props} />
	);
};

export default MyInput;
