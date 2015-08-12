import React from 'react';
import '../../styles/Brand.less';

let Brand = React.createClass({

  render() {
    return (
      <div className="col-xs-4 navbar-brand">
        <img src="http://frontendcarioca.com.br/assets/image/empresas/patrocinio/vtex.png" className="center-block v-wish__site-logo"/>
      </div>
    );
  }
});

export default Brand;
