import React from 'react';
import CatalogActions from '../../actions/CatalogActions';

let ProductCat = React.createClass({
  handleClick() {
    let {sku} = this.props.data;
    CatalogActions.addSku(sku);
  },

  render() {
    return (
      <div className="col-xs-1 navbar-form">
        <p>{this.props.data.produto}</p>
        <p>Categoria: {this.props.data.tipo}</p>
        <p>R$ {this.props.data.preco}</p>
        <button id="bot"
        className="glyphicon glyphicon-heart btn btn-default"
        onClick={this.handleClick}></button>
      </div>
    );
  }
});

export default ProductCat;
