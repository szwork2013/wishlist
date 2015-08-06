/***** NavBar.jsx *******/
/*
* Descrição: Componente que implementa a Navigation Bar
*     na página da Wishlist.
*
*  Componentes relacionados:
*     - Name.jsx: implementa o botão de menu.
*     - WishlistIcon.jsx: componente da imagem da marca.
*     - NavBar.less: descreve as classes de CSS usadas no componente NavBar.jsx.
*
*/
import React from 'react';

import Name from './Name.jsx';
import WishlistIcon from './WishlistIcon.jsx';
import style from 'styles/NavBar.less'; // eslint-disable-line

let NavBar = React.createClass({

  render() {
    return (
      <div className=" bottom-bar wishlistnav">
          <Name/>
          <WishlistIcon/>
      </div>
    );
  }
});

export default NavBar;
