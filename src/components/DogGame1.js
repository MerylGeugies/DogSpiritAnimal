import React from 'react';
import loadBreeds from '../actions/loadBreeds';
//import { connect } from 'net';
//import { Link } from 'react-router-dom'

export default function DogGame(props) {

  const answers = ["Hound", "Schnauzer", "Boxer"]
  return (
    <div>
      <h1>Test your skills in this dog game</h1>
      <div>


      </div>
      {<img scr={"https://images.dog.ceo/breeds/schnauzer-miniature/n02097047_6884.jpg"} alt={"image"}></img>}

      <ul>
        {answers.map(answer => <li>{answer}</li>)}

      </ul>
    </div>
  );
}
