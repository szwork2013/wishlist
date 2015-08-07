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

    // let email = "caso seja necessario definir um email, escrever aqui";
    // document.write("<a href = mailto:"+email+">"+lista+"</a>"); --> metodo possivelmente util eventualmente
    
    let subject = 'Minha Wishlist';
    let body = 'Produtos: ' + lista;
    location.href = 'mailto:' //+ email
      + '?subject=' + encodeURIComponent(subject)
      + '&body=' + encodeURIComponent(body);

  },


  render() {
    return (
      <div>
        <a href="#" onclick="javascript:window.location='mailto:'+this.email+'+'&body='+this.mail">
          <button type="button"
          className=" buttons fa fa-paper-plane-o btn btn-default buttom"
          onClick={this.handleClickMail}></button>
        </a>
      </div>
    );
  }
});

export default Send;
