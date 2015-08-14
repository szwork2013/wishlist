import React from 'react';
import 'styles/Price.less';

let Price = React.createClass({

  render() {
    return (
        <p className="pricecatalog">R$ {this.props.sku.price}</p>
    );
  }
});
export default Price;
