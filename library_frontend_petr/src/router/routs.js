import classPage from '../pages/classPage';
import classes from '../pages/classes';


export const privateRoutes = [
	{ path: '/classes', component: classes, exact: true },
	{ path: '/classes/:id', component: classPage, exact: true }
]