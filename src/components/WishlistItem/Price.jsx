import React from 'react';

let Price = React.createClass({

  render() {
    return (
        <p className="col-xs-12 pricecatalog">R$ {this.props.sku.price}</p>
    );
  }
});
export default Price;
