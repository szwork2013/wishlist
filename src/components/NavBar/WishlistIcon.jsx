import React from 'react';
import 'styles/NavBar.less';

let WishlistIcon = React.createClass({

  render() {
    return (
        <div className="glyphicon wishlistIcon glyphicon-heart wishlist-icon col-xs-2 center-block"></div>
    );
  }
});

export default WishlistIcon;
