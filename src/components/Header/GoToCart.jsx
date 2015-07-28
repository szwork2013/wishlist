import React from 'react';
import style from '../../styles/GoToCart.less';

let Buy = React.createClass({
  handleClick() {
    console.log('Foi para o carrinho');
  },

  render() {
    return (
      <div className="col-xs-5">
        <button type="button"
        className="buttons glyphicon glyphicon-shopping-cart btn btn-default col-xs-5 buttom"
        onClick={this.handleClick}></button>
      </div>
    );
  }
});

export default Buy;
