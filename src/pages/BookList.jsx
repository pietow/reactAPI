/** @format */

import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function Books() {
    const [books, setBooks] = useState([])
    useEffect(() => {
        const url = 'http://localhost:3000/books/'
        fetch(url)
            .then((body) => body.json())
            .then((data) => setBooks(data))
            .catch(console.log)
    }, [])

    const bookItems = books.map((book) => {
        return <li key={book.id}>{book.title}</li>
    })

    return (
        <div className="text-white items-center flex flex-col p-5 border-2 bg-gray-600 h-screen">
            <nav>
                <Link to="/">Home</Link>
            </nav>
            <h1 className="text-3xl underline">Books</h1>
            <ul className="text-center">{bookItems}</ul>
        </div>
    )
}
