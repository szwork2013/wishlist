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
          <div id="app-container" className="row container-fluid col-xs-12">
          </div>
        </div>
      </nav>
    );
  }
});

export default Catalog;
