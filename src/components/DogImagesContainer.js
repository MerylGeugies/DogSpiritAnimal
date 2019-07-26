import * as React from 'react';
import { connect } from 'react-redux';
import * as request from 'superagent'
import DogImages from './DogImages';
import {imagesLoaded} from '../actions/loadImages';


class DogImagesContainer extends React.Component {
  state = {dogImages: null} 
 
   componentDidMount() {
     const breed = this.props.match.params.breed;
    
    request 
    .get(`https://dog.ceo/api/breed/${encodeURIComponent(breed)}/images/random/10`)
    .then(response => {
      //is you want to use jSon. is't respons.Json.
      this.props.imagesLoaded(response.body.message);
    })
   }
 
   render() { 
       return <DogImages 
        dogImages={this.props.images}
        />
    }
 }
 
 const mapStateToProps = state => ({
   images: state.images
 });
 
 export default connect(mapStateToProps
   , {imagesLoaded}
   ) (DogImagesContainer);
