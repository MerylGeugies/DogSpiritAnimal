import * as React from 'react';
import './buttons.css';

export default class Buttons extends React.Component {
  render() {
    return <button
      className={`${this.props.buttonClass} button`}
      onClick={this.props.handleclick}
    >{this.props.buttonText}</button>
  }
}



