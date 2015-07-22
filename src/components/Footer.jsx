import React from 'react';
import Buy from './footer/Buy';
import Send from './footer/Send';

let Footer = React.createClass({

  render: function(){
    return (
      <nav className="col-xs-12 navbar navbar-default">
        <div className="container-fluid row center-block">
          <Buy/>
          <Send/>
        </div>
      </nav>
    );
  }
});

export default Footer;
