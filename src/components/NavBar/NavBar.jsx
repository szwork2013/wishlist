import React from 'react';

import Name from './Name.jsx';
import WishlistIcon from './WishlistIcon.jsx';
import Send from './Send.jsx';
import Buy from './Buy.jsx';
import Remove from './Delete.jsx';



import style from 'styles/NavBar.less'; // eslint-disable-line


let NavBar = React.createClass({

  render() {
    return (
      <div className=" bottom-bar wishlistnav col-xs-7">
          <Name/>
          <WishlistIcon/>
          <div className="col-xs-12">
            <div className= "col-xs-4 button-left"><Send/></div>
            <div className= "col-xs-4 button-left"><Buy/></div>
            <div className= "col-xs-4 button-left"><Delete/></div>

          </div>
      </div>
    );
  }
});

export default NavBar;
