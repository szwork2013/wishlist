import React from 'react';
import ProductActions from './ProductActions';

let AddCart = React.createClass({
  addClick(i) {
    console.log('Você adicionou o produto' + this.+ 'ao carrinho');
    //ProductActions.AddCart(); //recebe o sku a ser adicionado ao carrinho. Como???
  },

  render() {
    return (
      <div className="col-xs-4 navbar-form row container-fluid">
        <button type="button"
        className="btn btn-success"
        onClick={this.addClick}>
          Adicionar carrinho
        </button>
      </div>
    );
  }
});

export default AddCart;
