import React from 'react';
import WishlistActions from 'actions/WishlistActions';

let SkuItem = React.createClass({
  addSkuToWishlist() {
    WishlistActions.addSku(this.props.sku);
  },

  render() {
    return (
      <div className="col-xs-12 navbar-form">
        <p>{this.props.sku.description}</p>
        <p>Categoria: {this.props.sku.category}</p>
        <p>R$ {this.props.sku.price}</p>
        <button
          className="glyphicon glyphicon-heart btn btn-default"
          onClick={this.addSkuToWishlist}>
        </button>
      </div>
    );
  }
});

export default SkuItem;
