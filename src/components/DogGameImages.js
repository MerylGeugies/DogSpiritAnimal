import * as React from 'react'

export default function DogGame(props) {
  return (<div><h1>Test your skills in this dog game</h1><p>Which dog breed is this?</p><div className="DogGameImages">
    {props.dogImages
      ? props.dogImages.map(image =>
        <img alt='dogs' src={image} key={image} />
      )
      : 'Images are loading...'
    }
  </div>
  </div>
  )

}


