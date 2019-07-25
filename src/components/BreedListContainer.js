import React, {Component} from 'react';
//import * as React from 'react';
import request from 'superagent';
import BreedList from './BreedList';
//import { connect } from 'react-redux';

class BreedListContainer extends Component {
    state = {dogBreeds: null };
    
    componentDidMount() {
        request
        .get('https://dog.ceo/api/breeds/list/all')
        .then(response => {
            console.log(response.body.message)
            this.updateBreeds(response.body.message)
        })
        .catch(console.error)
    }

    updateBreeds(breeds) {
        this.setState({
            dogBreeds: breeds
        })
    }

    render() {
        return <BreedList dogBreeds={this.state.dogBreeds}/>
    }
}
export default BreedListContainer