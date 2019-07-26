import * as React from 'react';
//import * as request from 'superagent'
import DogImages from './DogImages';
import { connect } from 'react-redux';
import {loadImages} from '../actions/loadImages';

class DogImagesContainer extends React.Component {
  state = {dogImages: null} 
 
   componentDidMount() {
     this.props.loadImages()
   }
 
   render() { 
       return <DogImages 
     dogImages={this.props.images}
      />
      //console.log('test render', this.props.images)
    }
 }
 
 const mapStateToProps = state => ({
   images: state.images
 });
 
 export default connect(mapStateToProps
   , {loadImages}
   ) (DogImagesContainer);
