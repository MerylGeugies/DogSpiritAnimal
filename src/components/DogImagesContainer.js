import React, {Component} from 'react';
import request from 'superagent';
import DogImages from './DogImages';

class DogImagesContainer extends Component {
  //think about state, what does it look like?  
  state = {images:null };
    
  //get all images from dogs per breed 
  //(we have to make a connection from dogbreedlist->dogpics to match the name with pictures so the can be displayed)

    componentDidMount() {
        request
        .get('https://dog.ceo/api/breed/' + this.props.match.params.breed + '/images/random/10')
        .then(response => {
            console.log(response.body.message)
            this.updateImages(response.body.message)
        })
        .catch(console.error)
    }

    updateImages(images) {
        this.setState({
            images: images
        })
    }

    render() {
        return <DogImages images={this.state.images}/>
    }
}
export default DogImagesContainer