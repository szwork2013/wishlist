import React from 'react';

import Name from './Name.jsx';
import WishlistIcon from './WishlistIcon.jsx';
import style from 'styles/NavBar.less'; // eslint-disable-line

let NavBar = React.createClass({

  render() {
    return (
      <div className=" bottom-bar wishlistnav">
          <Name/>
          <WishlistIcon/>
      </div>
    );
  }
});

export default NavBar;
