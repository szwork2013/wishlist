/***** Menu.jsx *******/
/*
* Descrição: Implementa o botão de acessar o menu
*     da página da Wishlist.
*
*  Componentes relacionados:
*     - Menu.less: descreve as classes de CSS do componente Menu.jsx
*
*/
import React from 'react';
import style from '../../styles/Menu.less'; // eslint-disable-line

let Menu = React.createClass({
  handleClick() {
    console.log('não tem menu ainda');
  },

  render() {
    return (
      <div className="col-xs-3 menu">
        <button
        className="glyphicon glyphicon-menu-hamburger btn btn-default buttom"
        onClick={this.handleClick}></button>
      </div>
    );
  }
});

export default Menu;
