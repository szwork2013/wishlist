import React from 'react';
import style from 'styles/NavBar.less';

let WishlistIcon = React.createClass({

  render() {
    return (
        <div className="col-xs-12 center glyphicon glyphicon-heart wishlist col-xs-2 center-block" >  Itens </div>
    );
  }
});

export default WishlistIcon;
