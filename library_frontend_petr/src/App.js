import React, { useState } from 'react'
import { useEffect } from 'react'
import styles from './style.module.css';
import AppRouter from './components/AppRouter';
import { BrowserRouter } from 'react-router-dom'
import { withLayout } from './components/Layout/Layout'

function App() {
    return (
        <BrowserRouter>
            <AppRouter />
        </BrowserRouter>
    );
}

export default withLayout(App);

