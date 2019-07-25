import React from 'react';
import { Link } from 'react-router-dom'


const DogImages = props => {
  return (
    <div className="dog-breed-images">
      <h1>Dogs Breed Images</h1>
      This page will show images of a specific dog breed.
      <div>
        { props.images && props.images.map(url => <img src={ url } alt="Dog" />) }
       { !props.images && 'Loading...' }
      </div>  

      <Link to="/">Go back to the index</Link>

      {/* <Route path="/dog-breeds/:breed" component={DogBreedImages} />       */}
      {<p>
        { props.images && props.images.map(url => <img src={ url } alt="Dog" />) }
        { !props.images && 'Loading...' }
      </p>}

</div>
  )
}
export default DogImages