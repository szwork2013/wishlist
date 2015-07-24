import React from 'react';

let Price = React.createClass({

  render() {
    return (
      <div className="col-xs-4 ">
        <p className="text-center navbar-brand">R$ {this.props.sku.price}</p>
      </div>
    );
  }
});
export default Price;
