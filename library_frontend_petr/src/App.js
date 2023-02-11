import React, { useState } from 'react'
import { useEffect } from 'react'
import { useFetching } from './hooks/useFetching'
import MyInput from './components/UI/MyInput/MyInput'
import MyButton from './components/UI/MyButton/MyButton'
import styles from './style.module.css';
import AppRouter from './components/AppRouter';
import { BrowserRouter } from 'react-router-dom'
import { withLayout } from './components/Layout/Layout'

function App() {


    return (
        <div className='App' >
            <BrowserRouter>
                <AppRouter />
            </BrowserRouter>
        </div>
    );
}

export default withLayout(App);
// export default App

