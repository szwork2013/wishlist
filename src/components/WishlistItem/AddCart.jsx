import React from 'react';
import style from '../../styles/AddCart.less'; // eslint-disable-line

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
