import React from 'react';
import WishlistStore from 'stores/WishlistStore';
import Send from './Footer/Send';
import _ from 'underscore';

let MailList = React.createClass({
  handleClickMailForm() {
    console.log('estou funcionando click');
  },

  handleSubmit(){
  	console.log('estou funcionando submit');
  },

  render() {
    return(
      <div>
	    <form className="text-center" onSubmit={this.handleSubmit}>
          <p>Nome:</p> 
          <p><input 
          type="text"
          className="form-control input-sm hide-borders col-xs-2"
          placeholder="Nome"/></p>

          <p>Email:</p> 
          <p> <input 
          type="email"
          className="form-control input-sm hide-borders col-xs-2"
          placeholder="Email"/></p> 

          <p><button type="button" 
          className="btn btn-info"
          onClick={this.handleClickMailForm}>
          <a href="mailto:name@email.com">
            ENVIAR
          </a>
          </button></p>
        </form>
      </div>
    );
  }
	//chamar wishlist store e pegar o mail de lá
});

export default MailList;