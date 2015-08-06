/***** Header.jsx *******/
/*
* Descrição: Componente que implementa o Header
*     na página da Wishlist.
*
*  Componentes relacionados:
*     - Menu.jsx: implementa o botão de menu.
*     - Brand.jsx: componente da imagem da marca.
*     - GoToCart.jsx: implementa o botão associado à página do carrinho.
*     - Header.less: descreve as classes de CSS usadas no componente Header.jsx.
*
*/
import React from 'react';

import Menu from './Menu';
import Brand from './Brand';
import GoToCart from './GoToCart';
import style from 'styles/Header.less'; // eslint-disable-line

let Header = React.createClass({

  render() {
    return (
      <nav className="navigation col-xs-12 navbar navbar-default">
        <div className="container-fluid row top-buttons">
          <Menu/>
          <Brand/>
          <GoToCart/>
        </div>
      </nav>
    );
  }
});

export default Header;
