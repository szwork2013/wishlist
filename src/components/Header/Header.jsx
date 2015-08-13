import React from 'react';

import Menu from './Menu';
import Brand from './Brand';
import GoToCart from './GoToCart';
import WishlistButton from './WishlistButton';

import 'styles/Header.less';

let Header = React.createClass({

  render() {
    return (
        <nav className="navigation navbar navbar-default">
          <div className="container-fluid row top-buttons">
            <Menu/>
            <Brand/>
            <div className="col-xs-4 header-icons">
              <WishlistButton/>
              <GoToCart/>
            </div>
          </div>
        </nav>
    );
  }
});

export default Header;
