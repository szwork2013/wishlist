import React from 'react';
import style from 'styles/NavBar.less';

let WishlistIcon = React.createClass({

  render() {
    return (
      <div className="col-xs-12">
        <div className="glyphicon glyphicon-heart wishlist col-xs-2" ></div>
      </div>
    );
  }
});

export default WishlistIcon;
