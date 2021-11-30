import { Link } from 'gatsby'
import React from 'react'

export default function MovieCard({title, id}) {
    return (
        <Link key={id} to={`/movie?movieId=${id}`}>
                <h2>{title}</h2>
        </Link>
    )
}
