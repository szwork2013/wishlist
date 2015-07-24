import React from 'react';
import ProductCat from './catalog/ProductCat';

let Catalog = React.createClass({
  getInitialState(){
    return {
      prod: [
        {sku: 1, produto: 'Tenis Nike', tipo: 'calçado', preco: 99.0},
        {sku: 2, produto: 'Camisa Polo', tipo: 'camisa', preco: 80},
        {sku: 3, produto: 'Casaco Ecko', tipo: 'casaco', preco: 247.90},
        {sku: 4, produto: 'Tenis Adidas', tipo: 'calçado', preco: 270.0},
        {sku: 5, produto: 'Tenis Reebok', tipo: 'calçado', preco: 130.0}
      ]
    };
  },
  render(){
    return (
      <nav className="col-xs-12 navbar navbar-default">
        <div className="container-fluid row center-block">
        <h1>Catalogo Fake</h1>
          <div className="center">
            {this.state.prod.map((product) => {
              return (<ProductCat data={product} key={product.sku}/>);
            })}
          </div>
        </div>
      </nav>
    );
  }
});

export default Catalog;
