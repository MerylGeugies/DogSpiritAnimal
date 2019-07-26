import React from 'react';
import { Link } from 'react-router-dom';

export default function BreedList(props) {
  console.log('props.dogBreeds test', props.dogBreeds) 
    return (
        <div>
          <h1>These are all the dog breeds</h1>
          <ul>
             { props.dogBreeds
              ? props.dogBreeds.map(breed => <p key={breed}>
                <Link to={ `/dog-breeds/${breed}` }>{breed}</Link></p>)
             
               : 'Loading...'
            }
          </ul>
        </div>
      );
}