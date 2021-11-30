import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';
import Layout from '../components/Layout'
import MovieCard from '../components/MovieCard';

export default function Movies() {
    
    const [movies, setMovies] = useState();

    useEffect(() => {
        axios(`https://ghibliapi.herokuapp.com/films`)
        .then(result => {     
            setMovies(result.data);
        })
    }, []);

    return (
        <Layout>
        <div>
            <h2>Movies</h2>
            <div>
                {movies?.map(movie =>(
                    <MovieCard
                    id={movie.id}
                    title={movie.title}/>
                    
                ))}
            </div>
        </div>
        </Layout>
    )
}
