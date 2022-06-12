/** @format */
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function Books() {
    const [books, setBooks] = useState([])
    useEffect(() => {
        // We moved these functions inside!
        function getFetchUrl() {
            return 'http://localhost:3000/book/'
        }
        fetch(getFetchUrl())
            .then((body) => body.json())
            .then((data) => setBooks(data))
    }, [])
    return (
        <div className="flex flex-col p-5 items-center bg-gray-600 h-screen">
            <nav>
                <Link className="text-3xl hover:text-red-400" to="/">
                    Home
                </Link>
            </nav>
            <h1 className="text-3xl underline">Books</h1>
        </div>
    )
}
