import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';
import Layout from '../../components/Layout'
import * as styles from '../../styles/people.module.css'
import PeopleCard from '../../components/PeopleCard';



export default function People() {

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
                <div>
                <PeopleCard
                id={people.id}
                name={people.name}
                />
                </div>
                 ))}
            </div>
        </div>
        </Layout>
    )
}
