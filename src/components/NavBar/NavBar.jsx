import React from 'react';

import Name from './Name.jsx';
import WishlistIcon from './WishlistIcon.jsx';
import Send from './Send.jsx';
import Buy from './Buy.jsx';


import style from 'styles/NavBar.less'; // eslint-disable-line


let NavBar = React.createClass({

  render() {
    return (
      <div className=" bottom-bar wishlistnav col-xs-7">
          <Name/>
          <WishlistIcon/>
          <div className="footerNavigation container-fluid row center-block">
            <div className="button-left buttonAlign"><Send/></div>
            <div className="button-right buttonAlign"><Buy/></div>
          </div>
      </div>
    );
  }
});

export default NavBar;
