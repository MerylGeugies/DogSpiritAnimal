import request from 'superagent';

export const BREEDS_LOADED = 'BREEDS_LOADED'; 

export const loadBreeds = () => {
  return dispatch => {
    request
    .get('https://dog.ceo/api/breeds/list/all')
    .then(response => 
      //is you want to use jSon. is't respons.Json.
      dispatch(breedsLoaded(Object.keys(response.body.message))))
  }
}

const breedsLoaded = breeds => ( {
  type: 'BREEDS_LOADED',
  payload: breeds
})