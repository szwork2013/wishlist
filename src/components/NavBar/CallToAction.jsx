import React from 'react';
//import { Popover } from 'react-bootstrap';
import 'styles/CallToAction.less';

let CallToAction = React.createClass({
  handleClick(){
      console.log('Abre o modal para login. VETX ID');
  },
  autentica() {
    document.getElementById('loga').className='col-xs-offset-3';
  },

  render() {
    return (
      <div>
        <div className="alert alert-info" role="alert" onClick={this.autentica}>
          <p><small>Quer acessar sua Wishlist de qualquer lugar?</small>
          <br/><small><a href="#" className="alert-link">Informe o seu email.</a></small></p>
        </div>
        <div className="hidden" id="loga">
          <input placeholder="loga ae"></input>
          <button className="btn btn-submit">entrar</button>
        </div>
      </div>
    );
  }
});

export default CallToAction;
