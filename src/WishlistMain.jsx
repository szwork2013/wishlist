import React from 'react';

import Header from './components/Header/Header.jsx';
import Wishlist from './components/Wishlist';
import CookieManager from './components/CookieManager';
import NavBar from './components/NavBar/NavBar.jsx';

var WishlistMain = React.createClass({
  render() {
    return (
      <div>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width user-scalable=no"/>
        <CookieManager>
          <Header/>
          <NavBar/>
          <Wishlist/>
        </CookieManager>
      </div>
    );
  }
});
export default WishlistMain;
