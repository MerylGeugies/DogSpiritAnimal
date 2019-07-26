import request from 'superagent';

export const IMAGES_LOADED = 'IMAGES_LOADED';

export const loadRandomImages = () => {
  return dispatch => {
    request
      .get('https://dog.ceo/api/breeds/image/random')
      .then(response =>
        dispatch(imagesLoaded(response.body.message)))
  }
}

const imagesLoaded = images => ({
  type: 'IMAGES_LOADED',
  payload: images
})
