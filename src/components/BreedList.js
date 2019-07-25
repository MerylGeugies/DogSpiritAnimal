import React from 'react';
import { Link } from 'react-router-dom'

const BreedList = props => {
    const content = !props.dogBreeds
    ? 'Loading...'
    : <ul>{
        Object
            .keys(props.dogBreeds)
            .map((breed) => 
                <li key={breed}> 
                    <Link to={ `/dog-breeds/${breed}` }>{breed}</Link>
                </li>
            )
    }</ul>

    return (
        <div className = "dogs-list">
            <h1> Dogs List </h1>
            {content} 
        </div>
        )
    }
}
export default BreedList