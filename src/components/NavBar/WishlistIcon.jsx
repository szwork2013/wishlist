import React from 'react';
import style from 'styles/NavBar.less'; // eslint-disable-line

let WishlistIcon = React.createClass({

  render() {
    return (
        <div className="center glyphicon glyphicon-heart wishlist col-xs-2 center-block" >  Itens </div>
    );
  }
});

export default WishlistIcon;
