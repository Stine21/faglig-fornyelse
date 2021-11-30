import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';
import Layout from '../../components/Layout';

export default function Peopledetails({ location }) {
    console.log(location.search)
    const people_id = new URLSearchParams(location.search).get("peopleId");
    console.log(people_id)
    
    const [people, setPeople] = useState();

    useEffect(() => {
        axios(`https://ghibliapi.herokuapp.com/people/${people_id}`)
        .then(result => {     
            setPeople(result.data);
        })
    }, [people_id]);

    return !people? (<h1>Loading</h1>) : (
        <Layout>
        <div>
            <h1>{people.name}</h1>
        </div>
        </Layout>
    )
}
