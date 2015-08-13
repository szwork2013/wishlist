import React from 'react';
import '../../styles/WishlistButton.less';
import { Link } from 'react-router';


let WishlistButton = React.createClass({
  handleClick() {
    console.log('Foi para o carrinho');
  },

  render() {
    return (
        <Link to="wishlist_main" className="glyphicon glyphicon-heart wishlist-icon col-xs-2 center-block centerIcon equalButton"
        onClick={this.handleClick}></Link>
    );
  }
});

export default WishlistButton;
