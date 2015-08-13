import React from 'react';
import WishlistActions from '../../actions/WishlistActions';
import 'styles/CallToAction.less';

let CallToAction = React.createClass({
  handleClick(){
      console.log('Abre o modal para login. VETX ID');
  },
  getInitialState() {
    return {email: ''};
  },
  showsAutentication() {
    document.getElementById('loga').className='col-xs-offset-2 form-inline';
  },
  onChange(e) {
    this.setState(
      {email:e.target.value}
    );
  },
  checkEmail(e) {
    e.preventDefault();
    WishlistActions.searchEmail(this.state.email);
  },

  render() {
    return (
      <div>
        <div className="alert alert-info" role="alert" onClick={this.showsAutentication}>
          <p><small>Quer acessar sua Wishlist de qualquer lugar?</small>
          <br/><small><a href="#" className="alert-link">Informe o seu email.</a></small></p>
        </div>
        <form className="hidden" id="loga">
          <input className="form-control" value={this.state.email} onChange={this.onChange}></input>
          <button className="btn btn-default" onClick={this.checkEmail}>entrar</button>
        </form>
      </div>
    );
  }
});

export default CallToAction;
