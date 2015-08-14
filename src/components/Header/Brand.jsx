import React from 'react';
import '../../styles/Brand.less';
import { Navigation } from 'react-router';

let Brand = React.createClass({
  mixins:[Navigation],

  handleClick() {
    this.transitionTo('/wishlist/catalog');
  },

  render() {
    return (
      <div className="col-xs-4 navbar-brand">
        <img src="http://frontendcarioca.com.br/assets/image/empresas/patrocinio/vtex.png" className="center-block v-wish__site-logo" onClick={this.handleClick}/>
      </div>
    );
  }
});

export default Brand;
