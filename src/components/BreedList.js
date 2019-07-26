import React from 'react';
//import { connect } from 'net';
//import { Link } from 'react-router-dom'

export default function BreedList(props) {

    return (
        <div>
          <h1>All dog breeds</h1>
          <ul>
        { props.dogBreeds 
          ? props.dogBreeds.map(breeds => <p key={breeds}>{breeds}</p>) 
          : 'Loading...'}
          </ul>
        </div>
      );
}