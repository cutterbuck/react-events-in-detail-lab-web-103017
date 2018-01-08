// Code CoordinatesButton Component Here
import React from 'react';

class CoordinatesButton extends React.Component {
  getCoordinates = (e) => {
    this.props.onReceiveCoordinates([e.clientX, e.clientY])
  }

  render() {
    return (
      <button onClick={this.getCoordinates}>Get Coordinates!</button>
    )
  }
}

export default CoordinatesButton;
