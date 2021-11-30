import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';
import * as styles from "../styles/movie.module.css"
import Layout from '../components/Layout';

export default function Movie({ location }) {
 console.log(location.search)
    const movie_id = new URLSearchParams(location.search).get("movieId");
    console.log(movie_id)
    const [movie, setMovie] = useState();

    useEffect(() => {
        axios(`https://ghibliapi.herokuapp.com/films/${movie_id}`)
        .then(result => {     
            setMovie(result.data);
        })
    }, [movie_id]);

    return !movie? (<h1>Loading</h1>) : (
        <Layout>
        <div className={styles.movie}>
            <h1>{movie.title}</h1>
            <img src={movie.movie_banner} alt="" />
            <div className="movie_titles">
                <h2>{movie.original_title}</h2>
                <h2>{movie.original_title_romanised}</h2>
            </div>
            <div>
                <div>
                 <p>{movie.description}</p>
                 </div>
            </div>
           
        </div>
        </Layout>
    )
}
