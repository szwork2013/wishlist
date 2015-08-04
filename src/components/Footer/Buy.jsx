import React from 'react';
//import cookie from 'react-cookie';
import _ from 'underscore';
import WishlistStore from 'stores/WishlistStore';

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

    // por jQuery:
    // let cart = jQuery.grep(cookie.load('wishlist'), function( id ) {
    //   return id;
    // });

    // cookie.load('wishlist');
    //console.log(this.state.skus);
    let cart = _.pluck(this.state.skus, 'id');

    // ler por cookie caso seja necessario/mudem de ideia:
    //let cart2 = _.pluck(cookie.load('wishlist').skus, 'id');

    // let cart2 = a.skus.map(item => item.id);
    // console.log('Map', cart2);
    console.log('IDs:', cart);
    console.log('Lista comprada com sucessooooooooo'); //a ser mudado quando tiver um carrinho
  },

  render() {
    return (
      <div className="col-xs-4 navbar-form navbar-right row container-fluid">
        <button type="button"
         className="btn btn-success"
         onClick={this.handleClick}>
          Comprar essa lista
        </button>
      </div>
    );
  }
});

export default Buy;
