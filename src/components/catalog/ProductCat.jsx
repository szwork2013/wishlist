import React from 'react';

let ProductCat = React.createClass({
  handleClick() {
    let {sku} = this.props.data;
    console.log('adiciona ' + sku + ' na wishlist');
  },

  render() {
    return (
      <div className="col-xs-1 navbar-form">
        <p>{this.props.data.produto}</p>
        <button id="bot"
        className="glyphicon glyphicon-heart btn btn-default"
        onClick={this.handleClick}></button>
      </div>
    );
  }
});

export default ProductCat;
