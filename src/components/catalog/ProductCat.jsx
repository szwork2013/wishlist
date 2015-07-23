import React from 'react';
import flux from '../../flux';
//import CatalogActions from 'CatalogActions';

let ProductCat = React.createClass({
  handleClick() {
    console.log('adiciona na wishlist');

    //var sku = this.props.selected.sku;
    //var update = {
    //  name: this.props.product.name,
    //  type: this.props.selected.type,
    //  price: this.props.selected.price
    //};

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
