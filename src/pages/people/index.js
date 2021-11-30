import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';
import Layout from '../../components/Layout'
import * as styles from '../../styles/people.module.css'
import { Link } from 'gatsby';



export default function People({id}) {

    const [people, setPeople] = useState();

    useEffect(() => {
        axios(`https://ghibliapi.herokuapp.com/people`)
        .then(result => {     
            setPeople(result.data);
        })
    }, []);
    return (
        <Layout>
        <div className={styles.people}>
            <h2>People</h2>
            <h3>Studio Ghibli characters from the movies</h3>
            <div>
                {people?.map(people => (
                    <Link key={id} to={`/people/peopledetails?peopleId=${id}`}>
                        <h2>{people.name}</h2>
                    </Link>
                ))}
            </div>
        </div>
        </Layout>
    )
}
