import * as React from 'react'

export default function DogImages(props) {
  return (<div>
    <h1>10 Dog Images</h1>
    {console.log(() => {
      return props.dogimages.slice(0, 11);
    })}
    {/* {console.log(<img src={props.dogimages[0]} alt="dogimage"></img>)} */}
    <div><img src={props.dogimages[0]} alt="dogimage"></img></div>
  </div >)

}

