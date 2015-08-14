import React from 'react';
import cookie from 'react-cookie';
import WishlistStore from '../stores/WishlistStore';
import WishlistActions from '../actions/WishlistActions';

let CookieManager = React.createClass({

  getInitialState() {
    return WishlistStore.getState();
  },

  componentDidMount() {
    WishlistStore.listen(this.onChange);

    let wishlist = cookie.load('wishlist');

    if (wishlist) {
      WishlistActions.retrieveSkus(wishlist.skus);
    }
  },

  componentWillUnmount() {
    WishlistStore.unlisten(this.onChange);
  },

  onChange(state) {
    cookie.save('wishlist', {'skus': state.skus});
    this.setState(state);
  },

  render() {
    return (
      <div className="CookieManager row">
      { this.props.children }
      </div>
    );
  }
});
export default CookieManager;
