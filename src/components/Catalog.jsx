import React from 'react';
import ProductCat from './catalog/ProductCat';

let Catalog = React.createClass({

  render: function(){
    return (
      <nav className="col-xs-12 navbar navbar-default">
        <div className="container-fluid row center-block">
        <ProductCat/>
        <ProductCat/>
        <ProductCat/>
        <ProductCat/>
        <ProductCat/>
        <ProductCat/>
        <ProductCat/>
        <ProductCat/>
        <ProductCat/>
        </div>
      </nav>
    );
  }
});

export default Catalog;
