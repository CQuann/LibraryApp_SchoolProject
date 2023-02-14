import LoginService from 'API/LoginService'
import MyLoader from 'components/UI/MyLoader/MyLoader'
import { AuthContext } from 'context'
import { useFetching } from 'hooks/useFetching'
import React, { useContext, useState } from 'react'
import { useEffect } from 'react'
import cn from './Title.module.css'

export default function Title() {
	const { isAuth, setIsAuth } = useContext(AuthContext)
	const [correctLoginPass, setCorrectLoginPass] = useState({
		"login": "",
		"password": ""
	})

	const [getLoginPass, isLoginPassLoading, loginPassError] = useFetching(async () => {
		const response = await LoginService.getLoginPass()
		// console.log(response)
		setCorrectLoginPass(response)
	})

	useEffect(() => {
		// @ts-ignore
		getLoginPass()
	}, [])

	const signIn = event => {
		event.preventDefault();
		// console.log(event.target[0].value)
		// console.log(event.target[1].value)
		console.log(correctLoginPass.login)
		console.log(correctLoginPass.password)
		if (event.target[0].value === correctLoginPass.login && event.target[1].value === correctLoginPass.password) {
			setIsAuth(true)
			localStorage.setItem('auth', 'true')
		} else {
			return
		}
	}

	return (
		<div className="">
			{
				isLoginPassLoading
					? <MyLoader />
					: <div>
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
							<form onSubmit={signIn} className={cn.form} >
								<input type="text" placeholder='Логин' className={cn.inputLogin} />
								<input type="password" placeholder='Пароль' className={cn.inputPassword} />
								<button
									className={cn.btnSignIn}
									onClick={() => signIn}
								> Войти </button>
							</form>
						</div>
					</div>
			}
		</div>


	)
}
