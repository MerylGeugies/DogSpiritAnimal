import request from 'superagent';

export const IMAGES_LOADED = 'IMAGES_LOADED'; 

export const loadImages = () => {
  return dispatch => {
    request
    .get('https://dog.ceo/api/breed/hound/afghan/images')
    .then(response => 
      //is you want to use jSon. is't respons.Json.
      dispatch(imagesLoaded(response.body.message)))
  }
}

const imagesLoaded = images => ( {
  type: 'IMAGES_LOADED',
  payload: images
})

// + this.props.match.params.breed + 