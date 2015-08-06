/***** Name.jsx *******/
/*
* Descrição: Componente para o nome da Wishlist na página.
*
*  Componentes relacionados:
*     - Name.less: descreve as classes de CSS usadas no componente Name.jsx.
*
*/
import React from 'react';
import style from 'styles/NavBar.less'; // eslint-disable-line


let Name = React.createClass({

  render() {
    return (
      <div className="col-xs-12 wishlistname-container">
        <div className="wishlistname">WISHLIST</div>
        </div>
    );
  }
});

export default Name;
