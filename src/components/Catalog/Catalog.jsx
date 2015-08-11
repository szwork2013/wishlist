import React from 'react';
import SkuItem from './SkuItem';
import { Link } from 'react-router';
import CookieManager from '../CookieManager';

let Catalog = React.createClass({
  getInitialState(){
    return {
      skus: [
        {id: 1, description: 'Tenis Nike', category: 'calçado', price: 99.0},
        {id: 2, description: 'Camisa Polo', category: 'camisa', price: 80},
        {id: 3, description: 'Casaco Ecko', category: 'casaco', price: 247.90},
        {id: 4, description: 'Tenis Adidas', category: 'calçado', price: 270.0},
        {id: 5, description: 'Tenis Reebok', category: 'calçado', price: 130.0}
      ]
    };
  },
  render() {
    return (
      <CookieManager>
      <nav className="col-xs-12 navbar navbar-default">
        <div className="container-fluid row center-block">
        <Link to="wishlist_main">Ir para wishlist</Link>
        <h1>Catalogo Fake</h1>
          <div className="center">
            {this.state.skus.map((sku, index) => {
              return (<SkuItem sku={sku} key={index}/>);
            })}
          </div>
        </div>
      </nav>
      </CookieManager>
    );
  }
});

export default Catalog;
