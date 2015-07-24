import React from 'react';
import cookie from 'react-cookie';
import SkuStore from '../stores/SkuStore';
import CatalogActions from '../actions/CatalogActions';

let CookieController = React.createClass({

  getInitialState() {
    var wishlist = cookie.load('wishlist');

    if ( wishlist !== undefined) {
      CatalogActions.setInitialState(wishlist.skus);
    }
    return null;
  },

  componentDidMount() {
    SkuStore.listen(this.onChange);
  },

  componentWillUnmount() {
    SkuStore.listen(this.onChange);
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
