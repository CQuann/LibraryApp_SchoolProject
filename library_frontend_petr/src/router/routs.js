import classPage from '../pages/classPage';
import classes from '../pages/classes';
import studentPage from 'pages/studentPage';
import bringBookPage from 'pages/bringBookPage';
import editingPage from 'pages/editingPage';


export const privateRoutes = [
	{ path: '/classes', component: classes, exact: true },
	{ path: '/classes/:id', component: classPage, exact: true },
	{ path: '/students/:id', component: studentPage, exact: true },
	{ path: '/bringBook/:id', component: bringBookPage, exact: true },
	{ path: '/editing/', component: editingPage, exact: true }
]