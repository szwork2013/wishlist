import React from 'react';
import WishlistStore from 'stores/WishlistStore';

let Send = React.createClass({
  getInitialState() {
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
    let mail = this.state.skus;
    let lista = JSON.stringify(mail);

    console.log('Lista:', mail);
    console.log('IDs armazenados com sucesso.');
    
    let subject = 'Minha Wishlist';
    let body = 'Produtos: ' + lista;
    location.href = 'mailto:' //+ email
      + '?subject=' + encodeURIComponent(subject)
      + '&body=' + encodeURIComponent(body);

  },


  render() {
    return (
      <div className="col-xs-4 navbar-form navbar-left row container-fluid">
        <a href="#" onclick="javascript:window.location='mailto:'+this.email+'+'&body='+this.mail">
        <button type="button"
        className="btn btn-info"
        onClick={this.handleClickMail}>
          Enviar essa lista
        </button></a>
      </div>
    );
  }
});

export default Send;
