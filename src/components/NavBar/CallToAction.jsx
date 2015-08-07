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
    var email = document.getElementById('emailInput').value;
    console.log($.get('http://api.beta.vtex.com/dreamstore/masterdata/wishlist/_search?email='+email));
  },

  render() {
    return (
      <div>
        <div className="alert alert-info" role="alert" onClick={this.showsAutentication}>
          <p><small>Quer acessar sua Wishlist de qualquer lugar?</small>
          <br/><small><a href="#" className="alert-link">Informe o seu email.</a></small></p>
        </div>
        <form className="hidden" id="loga">
          <input className="form-control" id="emailInput" placeholder="Email"></input>
          <button className="btn btn-default" onClick={this.checkEmail}>entrar</button>
        </form>
      </div>
    );
  }
});

export default CallToAction;
