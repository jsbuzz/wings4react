import React, { PureComponent } from 'react';
import Connect from '../react-signal';

import Events from '../events';

class EventButton extends PureComponent {
  buttonPressed = () => {
    const { message } = this.props;
    this.namespace().trigger(
      new Events.Demo.ButtonPressed(message)
    );
  }

  componentDidMount() {
    console.log("EventButton mounted with message", this.props.message);
  }

  render() {
    const { message } = this.props;
    return (
      <button onClick={this.buttonPressed}>{message}</button>
    );
  }
}

export default Connect(EventButton);
