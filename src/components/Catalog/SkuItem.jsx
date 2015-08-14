import React from 'react';

import WishlistActions from 'actions/WishlistActions';
import 'styles/NavBar.less';
import WishlistActions from '../../actions/WishlistActions';
import WishlistStore from '../../stores/WishlistStore';


let SkuItem = React.createClass({

  addSkuToWishlist() {
    WishlistActions.addSku(this.props.sku);
  },

  removeSkuFromWishlist() {
    WishlistActions.removeSku(this.props.sku);
  },

  getInitialState() {
    return WishlistStore.getState();
  },

  componentDidMount() {
    WishlistStore.listen(this.onChange);
  },

  componentWillUnmount() {
    WishlistStore.unlisten(this.onChange);
  },

  onChange(state) {
    this.setState(state);
  },

  handleClick() {
    // this.setState({wished: !this.state.wished});
    // console.log(!this.state.wished);
    if(this.state.skus.filter(sku => sku.id === this.props.sku.id).length === 0) {
      this.addSkuToWishlist();
    } else {
      this.removeSkuFromWishlist();
    }
  },

  heartButton() {
    if(this.state.skus.filter(sku => sku.id === this.props.sku.id).length === 0) {
      return (
        <div>
          <button
            className="glyphicon glyphicon-heart-empty btn btn-default"
            onClick={this.handleClick}>
          </button>
        </div>
      );
    } else {
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
