import React from 'react';
import style from '../../styles/AddCart.less';

let AddCart = React.createClass({
    addClick() {
      console.log('Produto adicionado ao carrinho');
    },

      render() {
        return (
          <div className="col-xs-12 cart">
            <button className="buttons glyphicon glyphicon-shopping-cart btn btn-default col-xs-5 buttom" ></button>
          </div>
        );
      }
    });


export default AddCart;
