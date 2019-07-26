import * as React from 'react'

export default function DogImages(props) {
  return (<div>

    {props.dogImages 
      ? props.dogImages.map(image => 
        <img alt='dogs' src={image} key={image}/>
      ) 
      :'Loading...'
    }
  </div>
)

}

