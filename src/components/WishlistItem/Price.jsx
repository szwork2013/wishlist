import React from 'react';

let Price = React.createClass({

  render() {
    return (
      <div className="col-xs-12">
        <p className="pricecatalog">R$ {this.props.sku.price}</p>
      </div>
    );
  }
});
export default Price;
