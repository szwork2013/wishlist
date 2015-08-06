import React from 'react';
//import { Popover } from 'react-bootstrap';
import 'styles/CallToAction.less';

let CallToAction = React.createClass({
  handleClick(){
      console.log('Abre o modal para login. VETX ID');
  },
  showsAutentication() {
    document.getElementById('loga').className='col-xs-offset-2 form-inline';
  },

  checkEmail(e) {
    e.preventDefault();
    var email = document.getElementById('kek').value;
    console.log(email);
  },

  render() {
    return (
      <div>
        <div className="alert alert-info" role="alert" onClick={this.showsAutentication}>
          <p><small>Quer acessar sua Wishlist de qualquer lugar?</small>
          <br/><small><a href="#" className="alert-link">Informe o seu email.</a></small></p>
        </div>
        <div className="hidden" id="loga">
          <input className="form-control" id="kek" placeholder="Email"></input>
          <button className="btn btn-submit">entrar</button>
        </div>
      </div>
    );
  }
});

export default CallToAction;
