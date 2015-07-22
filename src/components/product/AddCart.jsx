import React from 'react';

let AddCart = React.createClass({
  addClick() {
    console.log('Produto adicionado ao carrinho');
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
