import React from 'react';
import WishlistActions from 'actions/WishlistActions';
import 'styles/NavBar.less';

let SkuItem = React.createClass({

  addSkuToWishlist() {
    WishlistActions.addSku(this.props.sku);
  },

  getInitialState() {
    return {wished: false};
  },

  handleClick(e) {
    this.setState({wished: !this.state.wished});
    console.log(!this.state.wished);
    this.addSkuToWishlist();
  },

  heartButton() {
    if(this.state.wished === false) {
    return (
      <div>
        <button
          className="glyphicon glyphicon-heart-empty btn btn-default"
          onClick={this.handleClick}>
        </button>
      </div>
    );
  }
  else {
    return (
      <div>
        <button
          className="glyphicon glyphicon-heart btn btn-default"
          onClick={this.handleClick}>
        </button>
      </div>
    );
  }

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
          { this.heartButton() }
          <button className="glyphicon glyphicon-shopping-cart btn btn-default" ></button>
        </div>
      </div>
    );
  }
});

export default SkuItem;
