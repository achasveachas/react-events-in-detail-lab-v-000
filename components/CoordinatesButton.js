const React = require('react')

class CoordinatesButton extends React.Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.props.onReceiveCoordinates([event.pageX, event.pageY]);
  }

  render() {
    return (
      <button onClick={this.handleClick}>Click me!</button>
    );
  }
}

module.exports = CoordinatesButton
