//import React, {Component} from 'react';
import * as React from 'react';
import Breedlist from './Breedlist';
import { connect } from 'react-redux';
import {loadBreeds} from '../actions/loadBreeds'

class BreedlistContainer extends React.Component {
 state = {dogBreeds: null} 

  componentDidMount() {
    this.props.loadBreeds()
  }

  render() { 
     return <Breedlist 
    dogBreeds={this.props.breeds}
    />
}
}

const mapStateToProps = state => ({
  breeds: state.breeds
});

export default connect(mapStateToProps
  , {loadBreeds}
  ) (BreedlistContainer);