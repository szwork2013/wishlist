import React from 'react';

let ProductCat = React.createClass({
  handleClick() {
    console.log('adiciona na wishlist');
  },

  render() {
    return (
      <div className="col-xs-4 navbar-form">
        <p>produto</p>
        <button
        className="glyphicon glyphicon-heart btn btn-default"
        onClick={this.handleClick}></button>
      </div>
    );
  }
});

export default ProductCat;
