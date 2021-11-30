import React from 'react'
import { Link } from 'gatsby'

export default function PeopleCard({name, movie, id}) {
    return (
        <div>
           
        <Link key={id} to={`/people/peopledetails?peopleId=${id}`}>
            <h2>{name}</h2>
            
        </Link>
               
        </div>
    )
}
