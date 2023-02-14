import { AuthContext } from 'context';
import React, { useContext } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../router/routs';
import MyLoader from './UI/MyLoader/MyLoader';

export default function AppRouter() {
	const { isAuth, isLoading } = useContext(AuthContext)
	console.log(isAuth)

	if (isLoading) {
		return <MyLoader />
	}

	return (
		isAuth
			?
			<Switch>
				{privateRoutes.map(route =>
					<Route
						component={route.component}
						path={route.path}
						exact={route.exact}
						key={route.path}
					/>
				)}
				<Redirect to='/classes' />
			</Switch>
			:
			<Switch>
				{publicRoutes.map(route =>
					<Route
						component={route.component}
						path={route.path}
						exact={route.exact}
						key={route.path}
					/>
				)}
				<Redirect to='/titlePage' />
			</Switch>
	)
}