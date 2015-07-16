import React from 'react';

let Buy = React.createClass({
  handleClick() {
    alert("vai compra nada não");
  },

  render() {
    return (
        <button type="button" className="btn btn-success" onClick={this.handleClick}>Comprar lista</button> 
    );
  }
});

export default Buy;