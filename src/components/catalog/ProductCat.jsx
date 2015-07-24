import React from 'react';

let ProductCat = React.createClass({
  handleClick() {
    let {sku} = this.props.data;
    console.log('adiciona ' + sku + ' na wishlist');
  },

  render() {
    return (
      <div className="col-xs-1 navbar-form">
      <table className="table-bordered">
        <p>{this.props.data.produto}</p>
        <p>Categoria: {this.props.data.tipo}</p>
        <p>R$ {this.props.data.preco}</p>
        <button id="bot"
        className="glyphicon glyphicon-heart btn btn-default"
        onClick={this.handleClick}></button>
      </table>
      </div>
    );
  }
});

export default ProductCat;
