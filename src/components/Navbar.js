import { Link } from 'gatsby'
import React from 'react'

export default function Navbar() {
    return (
        <nav>
            <h1>Studio Ghibli</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/movies">Movies</Link>
                <Link to="/people">People</Link>
            </div>
        </nav>
    )
}
