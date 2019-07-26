//import React, {Component} from 'react';
import * as React from 'react';
import DogGame1 from './DogGame1';
import { connect } from 'react-redux';
import { loadBreeds } from '../actions/loadBreeds';

class DogGameContainer extends React.Component {
  state = { dogBreeds: null }


  componentDidMount() {
    this.props.loadBreeds()
  }

  render() {
    return <DogGame1 />
  }
}

const mapStateToProps = state => ({
  breeds: state.breeds
});

export default connect(mapStateToProps
  , { loadBreeds }
)(DogGameContainer);