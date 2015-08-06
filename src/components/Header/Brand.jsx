/***** Brand.jsx *******/
/*
* Descrição: Componente da imagem da marca no Header da página da Wishlist.
*
*  Componentes relacionados:
*     - Brand.less: descreve as classes de CSS do componente Brand.jsx
*
*/
import React from 'react';
import style from '../../styles/Brand.less'; // eslint-disable-line

let Brand = React.createClass({

  render() {
    return (
      <div className="col-xs-6 navbar-brand">
        <img src="http://frontendcarioca.com.br/assets/image/empresas/patrocinio/vtex.png" className="center-block v-wish__site-logo"/>
      </div>
    );
  }
});

export default Brand;
