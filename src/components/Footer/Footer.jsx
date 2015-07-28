import React from 'react';
import Buy from './Footer/Buy';
import Send from './fFooter/Send';

let Footer = React.createClass({

  render: function(){
    return (
      <nav className="col-xs-12 navbar navbar-default">
        <div className="container-fluid row center-block">
          <Send/>
          <Buy/>
        </div>
      </nav>
    );
  }
});

export default Footer;
