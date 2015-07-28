import React from 'react';
import style from '../../styles/Brand.less';

let Brand = React.createClass({

  render() {
    return (
      <div className="col-xs-4 navbar-brand">
        <img src="../Images/logo.png" className="logo"/>
      </div>
    );
  }
});

export default Brand;
