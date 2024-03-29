import React from 'react';
import WishlistActions from 'actions/WishlistActions';
import 'styles/NavBar.less';

let SkuItem = React.createClass({
  addSkuToWishlist() {
    WishlistActions.addSku(this.props.sku);
  },

  render() {
    return (
      <div className="col-xs-12 navbar-form">
        <div className="col-xs-6">
          <img src={this.props.sku.image} />
        </div>
        <div className="col-xs-6">
          <p>{this.props.sku.description}</p>
          <p>R$ {this.props.sku.price}</p>
          <button
            className="glyphicon glyphicon-heart-empty btn btn-default"
            onClick={this.addSkuToWishlist}>
          </button>
          <button className="glyphicon glyphicon-shopping-cart btn btn-default" ></button>
        </div>
      </div>
    );
  }
});

export default SkuItem;
