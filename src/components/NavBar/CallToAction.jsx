import React from 'react';
//import { Popover } from 'react-bootstrap';
import 'styles/CallToAction.less';

let CallToAction = React.createClass({
  handleClick(){
      console.log('Abre o modal para login. VETX ID');
  },

  render() {
    return (
    /*  <div style={{ height: 60}}>
        <Popover placement='bottom' positionRight={80} className='popoverColor popoverPosition'>
        Faça <a href="#" className="alert-link" onClick={this.handleClick}>login</a> para lembrarmos de você</Popover>
      </div> */

      <div className="alert alert-info" role="alert">
        <p><small>Quer acessar sua Wishlist de qualquer lugar?</small>
        <br/><small><a href="#" className="alert-link">Informe o seu email.</a></small></p>
      </div>

    );
  }
});

export default CallToAction;
