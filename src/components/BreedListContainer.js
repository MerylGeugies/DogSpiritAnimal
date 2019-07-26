//import React, {Component} from 'react';
import * as React from 'react';
import BreedList from './BreedList';
import { connect } from 'react-redux';
import {loadBreeds} from '../actions/loadBreeds'

class BreedListContainer extends React.Component {
 state = {dogBreeds: null}
 

  componentDidMount() {
    this.props.loadBreeds()
  }

  render() { 
     return <BreedList 
    dogBreeds={this.props.breeds}
    />
  }
}

const mapStateToProps = state => ({
  breeds: state.breeds
});

export default connect(mapStateToProps
  , {loadBreeds}
  ) (BreedListContainer);