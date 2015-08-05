import React from 'react';
import WishlistStore from 'stores/WishlistStore';
import _ from 'underscore';

let EmailVariable = 'mila.oliveira@vtex.com.br'
let SubjectVariable = 'assunto'
let CCvariable = 'oi@oi.com.br'
let BCCvariable = 'oi@oi.com.br'
let BodyVariable = 'aaaaaaaaaaaaaaa'

let Send = React.createClass({
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
    let mail = this.state.skus;
    let lista = JSON.stringify(mail);

    console.log('Lista:', mail);
    console.log('IDs armazenados com sucesso.');

    //falta: fazer o componente separado do e-mail pegar a array mail (.mail // Send.mail 
    // Send.funcao(this.mail))

    // var email = "someone@microsoft.com";
    // document.write("<a href = mailto:"+email+">"+lista+"</a>");
    
    //var email = 'my@email.com';
    var subject = 'Minha Wishlist';
    var body = 'Produtos: ' + lista;
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
