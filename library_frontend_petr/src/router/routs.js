import classPage from '../pages/classPage';
import classes from '../pages/classes';
import studentPage from 'pages/studentPage';


export const privateRoutes = [
	{ path: '/classes', component: classes, exact: true },
	{ path: '/classes/:id', component: classPage, exact: true },
	{ path: '/students/:id', component: studentPage, exact: true }
]