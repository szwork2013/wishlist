import React from 'react';

import Picture from './product/Picture';
import Price from './product/Price';
import AddCart from './product/AddCart';
import Delete from './product/Delete';
import Info from './product/Info';

let Product = React.createClass({

  render: function() {
    return (
      <nav className="col-md-12 navbar navbar-default">
        <div className="container-fluid row">
          <div className="col-xs-4 navbar navbar-default">
            <Picture/>
          </div>
          <div className="col-xs-4 navbar navbar-default">
            <Info/>
          </div>
          <div className="col-xs-4 navbar navbar-deafult">
            <Price/>
            <div className = "col-xs-6">
              <Delete/>
              </div>
              <div className = "col-xs-6">
              <AddCart/>
            </div>
          </div>
        </div>
      </nav>
    );
  }
});

export default Product;
