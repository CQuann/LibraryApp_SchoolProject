import LoginService from 'API/LoginService'
import { AuthContext } from 'context'
import { useFetching } from 'hooks/useFetching'
import React, { useContext, useState } from 'react'
import { useEffect } from 'react'
import cn from './Title.module.css'

export default function Title() {
	const { isAuth, setIsAuth } = useContext(AuthContext)
	const [loginInp, setLogin] = useState('')
	const [passwordInp, setPassword] = useState('')
	const [correctLoginPass, setCorrectLoginPass] = useState()

	const [getLoginPass, isLoginPassLoading, loginPassError] = useFetching(async () => {
		const response = await LoginService.getLoginPass()
		setCorrectLoginPass(response)
	})

	useEffect(() => {
		// @ts-ignore
		getLoginPass()
		console.log(correctLoginPass)
	}, [])

	const signIn = event => {
		event.preventDefault();

		// setIsAuth(true)
		// localStorage.setItem('auth', 'true')
	}


	return (
		<div>
			<h1 className={cn.header} >
				Library App
			</h1>
			<div className={cn.description}>
				Концепт приложения для отслеживания, редактирования и заполнения данных, хранящихся в школьной библиотеке
			</div>
			<div className={cn.signIn}>
				<h1 className={cn.headerSignIn} >
					Войти в аккаунт
				</h1>
				<form onSubmit={signIn}>
					<input type="text" placeholder='Логин' className={cn.inputLogin} />
					<input type="password" placeholder='Пароль' className={cn.inputPassword} />
					<button> Войти </button>
				</form>
			</div>

		</div>
	)
}
