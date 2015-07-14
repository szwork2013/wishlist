import React from 'react';

let Hello = React.createClass({
  handleClick() {
    alert("OI");
  },

  render() {
    return (
      <div>
        <h1 onClick={this.handleClick}>HELLO</h1>
        <h1>WORLD</h1>
      </div>
    );
  }
});

export default Hello;