import React from 'react';
import style from '../../styles/WishlistButton.less'; // eslint-disable-line

let WishlistButton = React.createClass({
  handleClick() {
    console.log('Foi para o carrinho');
  },

  render() {
    return (
        <div className="glyphicon glyphicon-heart wishlist-icon col-xs-2 center-block centerIcon equalButton"
        onClick={this.handleClick}></div>
    );
  }
});

export default WishlistButton;
