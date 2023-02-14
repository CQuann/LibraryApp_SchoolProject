import React, { useState } from 'react'
import { useEffect } from 'react'
import styles from './style.module.css';
import AppRouter from './components/AppRouter';
import { BrowserRouter } from 'react-router-dom'
import { withLayout } from './components/Layout/Layout'
import { AuthContext } from 'context';

function App() {
    const [isAuth, setIsAuth] = useState(false);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        if (localStorage.getItem('auth')) {
            setIsAuth(false)
        }
        setIsLoading(false)
    }, [])

    return (
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth,
            isLoading
        }}>
            <BrowserRouter>
                <AppRouter />
            </BrowserRouter>
        </AuthContext.Provider>
    );
}

export default withLayout(App);

