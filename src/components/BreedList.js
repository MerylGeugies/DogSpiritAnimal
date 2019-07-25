import React from 'react';
//import { connect } from 'net';
//import { Link } from 'react-router-dom'

export default function Breedlist(props) {

    return (
        <div>
          <h1>All dog breeds</h1>
          There are albums available.
          <ul>
        { props.dogBreeds ? props.dogBreeds.map(breeds => <p key={breeds}>{breeds}</p>) : 'Loading...'}
           
            ))}
          </ul>
        </div>
      );
}