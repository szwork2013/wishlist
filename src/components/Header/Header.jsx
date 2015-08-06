import React from 'react';

import Menu from './Menu';
import Brand from './Brand';
import GoToCart from './GoToCart';
import WishlistButton from './WishlistButton';

import style from 'styles/Header.less'; // eslint-disable-line

let Header = React.createClass({

  render() {
    return (
      <nav className="navigation col-xs-12 navbar navbar-default">
        <div className="container-fluid row top-buttons">
          <Menu/>
          <Brand/>
          <div className="col-xs-4">
            <WishlistButton/>
            <GoToCart/>
          </div>
        </div>
      </nav>
    );
  }
});

export default Header;
