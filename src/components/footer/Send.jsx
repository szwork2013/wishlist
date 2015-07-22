import React from 'react';

let Buy = React.createClass({
  handleClick() {
    console.log('vai compra nada não');
  },

  render() {
    return (
      <div className="col-xs-4 navbar-form navbar-right row container-fluid">
        <button type="button"
        className="btn btn-success"
        onClick={this.handleClick}>
          Comprar essa lista
        </button>
      </div>
    );
  }
});

export default Buy;
