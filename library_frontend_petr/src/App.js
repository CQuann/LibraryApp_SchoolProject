import React, { useState } from 'react'
import { useEffect } from 'react'
import { useFetching } from './hooks/useFetching'
import MyInput from './components/UI/MyInput/MyInput'
import MyButton from './components/UI/MyButton/MyButton'
import styles from './style.module.css';
import AppRouter from './components/AppRouter';
import { HashRouter } from 'react-router-dom'

function App() {


    return (
        <div className='App' >
            <HashRouter>
                <AppRouter />
            </HashRouter>
        </div>
    );
}

export default App;

