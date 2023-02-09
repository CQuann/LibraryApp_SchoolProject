import React, { } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { privateRoutes } from '../router/routs';

export default function AppRouter() {


	return (
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
	)
}