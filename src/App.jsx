/** @format */

import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Link } from 'react-router-dom'

function App() {
    const [books, setBooks] = useState(0)

    return (
        <div className="App">
            <h1 className="text-3xl font-bold underline">Hello world!</h1>
            <header className="App-header">
                <div>
                    <nav>
                        <Link
                            className="text-3xl hover:text-red-400"
                            to="/books">
                            Books
                        </Link>
                    </nav>
                </div>
            </header>
        </div>
    )
}

export default App
