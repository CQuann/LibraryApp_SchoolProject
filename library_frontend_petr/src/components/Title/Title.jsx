import { AuthContext } from 'context'
import React, { useContext, useState } from 'react'
import cn from './Title.module.css'

export default function Title() {
	const { isAuth, setIsAuth } = useContext(AuthContext)
	const [login, setLogin] = useState('')
	const [password, setPassword] = useState('')


	const signIn = event => {
		event.preventDefault();
		setIsAuth(true)
		localStorage.setItem('auth', 'true')
	}


	return (
		<div>
			<h1 className={cn.header} >
				Library App
			</h1>
			<div className={cn.description}>
				Концепт приложения для отслеживания, редактирования и заполнения данных, хранящихся в школьной библиотеке
			</div>
			<form action="">

			</form>
		</div>
	)
}
