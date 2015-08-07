import React from 'react';
import _ from 'underscore';
import WishlistStore from 'stores/WishlistStore';
import style from '../../styles/Buy.less'; // eslint-disable-line

let Buy = React.createClass({

  getInitialState() { //sempre fazer o getInitialState "separado", nao pode pegar da outra funçao
    return WishlistStore.getState();
  },

  componentDidMount() {
    WishlistStore.listen(this.onChange);
  },

  componentWillUnmount() {
    WishlistStore.unlisten(this.onChange);
  },

  onChange(state) {
    this.setState(state);
  },

  handleClick() {
    let cart = _.pluck(this.state.skus, 'id');
    console.log('IDs:', cart);
    console.log('Lista comprada com sucesso'); //a ser mudado quando tiver um carrinho
  },

  render() {
    return (
      <div className="col-xs-4 navbar-form navbar-right row container-fluid">
        <button type="button"
        className=" buttons fa fa-cart-arrow-down btn btn-default buttom"
        onClick={this.handleClick}></button>
      </div>
      );
  }
});

export default Buy;
