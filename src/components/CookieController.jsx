import React from 'react';
import cookie from 'react-cookie';
import WishlistStore from '../stores/WishlistStore';
import WishlistActions from '../actions/WishlistActions';

let CookieController = React.createClass({

  getInitialState() {
    var wishlist = cookie.load('wishlist');

    if ( wishlist !== undefined) {
      WishlistActions.addList(wishlist.skus);
    }
    return null;
  },

  componentDidMount() {
    WishlistStore.listen(this.onChange);
  },

  componentWillUnmount() {
    WishlistStore.listen(this.onChange);
  },

  onChange(state) {
    cookie.save('wishlist', {'skus': state.skus});
  },

  render() {
    return (
      <div>
      { this.props.children }
      </div>
    );
  }
});
export default CookieController;
