// Code DelayedButton Component Here
import React from 'react';

class DelayedButton extends React.Component {
  delayListener = (e) => {
    e.persist();
    setTimeout(action => {this.props.onDelayedClick(e)}, this.props.delay)
  }

  render() {
    return (
      <button onClick={this.delayListener}>Delay Button!</button>
    )
  }
}

export default DelayedButton;
