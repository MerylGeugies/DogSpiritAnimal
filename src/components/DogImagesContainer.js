import * as React from 'react'
import * as request from 'superagent'
import DogImages from './DogImages'

export default class DogImagesContainer extends React.Component {
  state = {}

  componentDidMount() {
    request('https://dog.ceo/api/breed/hound/afghan/images')
      .then(response => this.setState({ dogimages: response.body.message }))
  }

  render() {

    if (!this.state.dogimages) return 'Loading...'
    return <DogImages dogimages={this.state.dogimages} />
  }
}
