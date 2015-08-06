/***** GoToCart.jsx *******/
/*
* Descrição: Implementa o botão do carrinho de compras no
*     Header da página da Wishlist.
*
*  Componentes relacionados:
*     - GoToCart.less: descreve as classes de CSS do componente GoToCart.jsx
*
*/
import React from 'react';
import style from '../../styles/GoToCart.less'; // eslint-disable-line

let GoToCart = React.createClass({
  handleClick() {
    console.log('Foi para o carrinho');
  },

  render() {
    return (
      <div className="col-xs-3">
        <button type="button"
        className="buttons glyphicon glyphicon-shopping-cart btn btn-default col-xs-5 buttom"
        onClick={this.handleClick}></button>
      </div>
    );
  }
});

export default GoToCart;
