import React from 'react';
import ProductCat from './catalog/ProductCat';

let Catalog = React.createClass({
  getInitialState(){
    return {
      prod: [
        {sku: 1, produto: 'tenis nike', tipo: 'calçado', preco: 99.0},
        {sku: 2, produto: 'camisa polo', tipo: 'camisa', preco: 80},
        {sku: 3, produto: 'casaco ecko', tipo: 'casaco', preco: 247.90},
        {sku: 4, produto: 'tenis adidas', tipo: 'calçado', preco: 270.0},
        {sku: 5, produto: 'tenis reebok', tipo: 'calçado', preco: 130.0},
        {sku: 6, produto: 'camisa taco', tipo: 'camisa', preco: 14.0},
        {sku: 7, produto: 'tenis armani', tipo: 'camisa', preco: 300}
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
