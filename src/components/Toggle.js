import React from 'react';

export default class Toggle extends React.Component {
  constructor(props) {
    super();
    this.state = {
      isToggleOn: true
    }

    this.handleClick = this.handleClick.bind(this);
  }


  handleClick() {
    this.setState((prevState)=> ({
      isToggleOn: !prevState.isToggleOn
    }));
  }


  render() {
    return(
      <button class="btn btn-primary"
              onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    )
  }
}