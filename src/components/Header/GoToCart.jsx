import React from 'react';
import style from '../../styles/GoToCart.less'; // eslint-disable-line

let GoToCart = React.createClass({
  handleClick() {
    console.log('Foi para o carrinho');
  },

  render() {
    return (
        <button type="button"
        className=" buttons glyphicon glyphicon-shopping-cart btn btn-default buttom"
        onClick={this.handleClick}></button>
    );
  }
});

export default GoToCart;
