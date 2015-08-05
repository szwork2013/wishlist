import React from 'react';
import style from '../../styles/Brand.less'; // eslint-disable-line

let Brand = React.createClass({

  render() {
    return (
      <div className="col-xs-6 navbar-brand">
        <img src="http://frontendcarioca.com.br/assets/image/empresas/patrocinio/vtex.png" className="center-block v-wish__site-logo"/>
      </div>
    );
  }
});

export default Brand;
