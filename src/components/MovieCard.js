import { Link } from 'gatsby'
import React from 'react'
import * as styles from '../styles/movies.module.css'


export default function MovieCard({title, img, id}) {
    return (
        <Link key={id} to={`/movie?movieId=${id}`}>
            <div className={styles.movies}>
                <h3>{title}</h3>
                <img src={img} alt="" />
            </div>
                
        </Link>
    )
}
