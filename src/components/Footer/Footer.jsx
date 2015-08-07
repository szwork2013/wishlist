import React from 'react';
import Buy from './Buy';
import Send from './Send';
import style from '../../styles/Footer.less'; // eslint-disable-line


let Footer = React.createClass({

  render() {
    return (
      <div className="col-xs-12 navbar">
        <div className="footerNavigation container-fluid row center-block">
          <div className="button-left buttonAlign"><Send/></div>
          <div className="button-right buttonAlign"><Buy/></div>
        </div>
      </div>
    );
  }
});

export default Footer;
