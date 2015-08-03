import React from 'react';
import cookie from 'react-cookie';

let Buy = React.createClass({
  handleClick() {
    var cart = cookie.load('wishlist');
    console.log(cart);
    console.log('Lista comprada com sucesso'); //a ser mudado quando tiver um carrinho
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
