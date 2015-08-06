/***** Footer.jsx *******/
/*
* Descrição: Implementa o Footer na página da Wishlist.
*
*  Componentes relacionados:
*     - Buy.jsx: componente do botão de comprar a lista inteira
*     - Send.jsx: componente do botão de enviar a lista
*
*/
import React from 'react';
import Buy from './Buy';
import Send from './Send';

let Footer = React.createClass({

  render() {
    return (
      <nav className="col-xs-12 navbar navbar-default">
        <div className="container-fluid row center-block">
          <Send/>
          <Buy/>
        </div>
      </nav>
    );
  }
});

export default Footer;
