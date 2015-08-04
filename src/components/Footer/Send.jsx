import React from 'react';
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

  handleClickMail() {
    console.log('vai enviar nada não');
  },

  render() {
    return (
      <div className="col-xs-4 navbar-form navbar-left row container-fluid">
        <button type="button"
        className="btn btn-info"
        onClick={this.handleClickMail}>
          Enviar essa lista
        </button>
      </div>
    );
  }
});

export default Buy;
