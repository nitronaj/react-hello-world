import React from "react";
import FormatDate from "./FormatDate";

export default class Clock extends React.Component {
  constructor(prop) {
    super();

    this.state = {
      date: new Date()
    };
  }

  componentDidMount() {
    this.intervalID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <FormatDate date={this.state.date} />
      </div>
    );
  }
}
