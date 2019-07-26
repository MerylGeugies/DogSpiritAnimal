import React from 'react';
//import { connect } from 'net';
//import { Link } from 'react-router-dom'

export default function BreedList(props) {
  console.log('props.dogBreeds test', props.dogBreeds) 
    return (
        <div>
          <h1>All dog breeds</h1>
          <ul>
             { props.dogBreeds
              ? props.dogBreeds.map(breed => <p key={breed}>{breed}</p>)
             
               : 'Loading...'
            }
          </ul>
        </div>
      );
}
