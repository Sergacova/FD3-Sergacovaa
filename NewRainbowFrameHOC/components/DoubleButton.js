import React from 'react';

class DoubleButton extends React.Component {
  handleClick1 = () => {
    this.props.cbPressed(1);
  };

  handleClick2 = () => {
    this.props.cbPressed(2);
  };

  render() {
    return (
      <div>
        <input
          type="button"
          value={this.props.caption1}
          onClick={this.handleClick1}
        />
        &nbsp;{this.props.children}&nbsp;
        <input
          type="button"
          value={this.props.caption2}
          onClick={this.handleClick2}
        />
      </div>
    );
  }
}

export default DoubleButton;
