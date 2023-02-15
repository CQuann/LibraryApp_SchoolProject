import classPage from '../pages/classPage';
import classes from '../pages/classes';
import studentPage from 'pages/studentPage';
import bringBookPage from 'pages/bringBookPage';
import editingPage from 'pages/editingPage';
import titlePage from 'pages/titlePage';
import AboutPage from 'pages/AboutPage';
import HelpPage from 'pages/HelpPage';


export const privateRoutes = [
	{ path: '/classes', component: classes, exact: true },
	{ path: '/classes/:id', component: classPage, exact: true },
	{ path: '/students/:id', component: studentPage, exact: true },
	{ path: '/bringBook/:id', component: bringBookPage, exact: true },
	{ path: '/editing', component: editingPage, exact: true },
	{ path: '/about', component: AboutPage, exact: true },
	{ path: '/help', component: HelpPage, exact: true },
]

export const publicRoutes = [
	{ path: '/title', component: titlePage, exact: true },
	{ path: '/about', component: AboutPage, exact: true },
	{ path: '/help', component: HelpPage, exact: true },
]