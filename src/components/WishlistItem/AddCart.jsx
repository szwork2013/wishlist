import React from 'react';
import '../../styles/AddCart.less';

let AddCart = React.createClass({
    addClick() {
      console.log('Produto adicionado ao carrinho');
    },

      render() {
        return (
          <div className="pricecatalog">
            <button className="glyphicon glyphicon-shopping-cart btn btn-default cart-wishlist" ></button>
          </div>
        );
      }
    });


export default AddCart;
