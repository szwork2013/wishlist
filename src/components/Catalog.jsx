import React from 'react';
import Buy from './footer/Buy';
import Send from './footer/Send';

let Catalog = React.createClass({

  render: function(){
    return (
      <nav className="col-xs-12 navbar navbar-default">
        <div className="container-fluid row center-block">
          <p className="col-xs-4">produto1</p>
          <p className="col-xs-4">produto2</p>
          <p className="col-xs-4">produto3</p>
        </div>
      </nav>
    );
  }
});

export default Catalog;
