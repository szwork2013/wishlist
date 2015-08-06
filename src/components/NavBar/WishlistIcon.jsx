/***** WishlistIcon.jsx *******/
/*
* Descrição: Componente que do ícone da Wishlist na página.
*
*  Componentes relacionados:
*     - WishlistIcon.less: descreve as classes de CSS usadas no componente WishlistIcon.jsx.
*
*/
import React from 'react';
import style from 'styles/NavBar.less'; // eslint-disable-line

let WishlistIcon = React.createClass({

  render() {
    return (
        <div className="glyphicon glyphicon-heart wishlist-icon col-xs-2 center-block">  Itens </div>
    );
  }
});

export default WishlistIcon;
