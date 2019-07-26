import * as React from 'react';
import { NavLink } from 'react-router-dom';
import Buttons from '../components/Buttons';

export default function DogImages(props) {

  return (<div>
    
    {props.dogImages 
      ? props.dogImages.map(image => 
        <img alt='dogs' src={image} key={image}/>
      ) 
      :'Loading...'
    }

    <NavLink to="/studybreeds">
      <Buttons buttonText={'Go back to the index'} buttonClass={"playgamebutton"} />
    </NavLink>

    {/* <p><Link to="/studybreeds">Go back to the index</Link></p> */}
  </div>
)

}

