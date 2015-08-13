import React from 'react';

import Name from './Name.jsx';
import CallToAction from './CallToAction.jsx';
import Send from './Send.jsx';
import Buy from './Buy.jsx';
import 'styles/NavBar.less';

let NavBar = React.createClass({

  render() {
    return (
      <div className="NavBar col-sm-12 bottom-bar-wrapper no-padding">
          <CallToAction/>
          <div className="bottom-bar wishlistnav">
            <Name/>
            <div className="wishlistnav_buttons">
              <div className= "col-xs-2 button-left"><Send/></div>
              <div className= "col-xs-2 button-left"><Buy/></div>
            </div>
          </div>
      </div>
    );
  }
});

export default NavBar;
