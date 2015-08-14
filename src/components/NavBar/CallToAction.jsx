import React from 'react';
import CatalogActions from '../../actions/CatalogActions';
import 'styles/CallToAction.less';

let CallToAction = React.createClass({
  getInitialState() {
    return {email: ''};
  },
  showsAutentication() {
    document.getElementById('loga').className='col-xs-offset-1 col-xs-8 form-inline';
  },
  onChange(e) {
    this.setState(
      {email:e.target.value}
    );
  },
  checkEmail(e) {
    e.preventDefault();
    CatalogActions.searchEmail(this.state.email);
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
          <div className="col-xs-offset-3">
            <button className="btn btn-default" onClick={this.checkEmail}>entrar</button>
          </div>
        </form>
      </div>
    );
  }
});

export default CallToAction;
