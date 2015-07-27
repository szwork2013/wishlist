import React from 'react';

let AddCart = React.createClass({
    addClick() {
      console.log('Produto adicionado ao carrinho');
    },

      render() {
        return (
          <div className="col-xs-4 navbar-form navbar-right row container-fluid">
            <button type="button"
            className="glyphicon glyphicon-shopping-cart btn btn-success"
            onClick={this.addClick}>
              AddCart
            </button>
          </div>
        );
      }
    });


export default AddCart;
