/** @format */

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Books from './pages/BookList.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}></Route>
            <Route path="books" element={<Books />} />
        </Routes>
    </BrowserRouter>,
)
