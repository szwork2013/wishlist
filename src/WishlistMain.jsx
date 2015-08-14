import React from 'react';

import Header from './components/Header/Header.jsx';
import Wishlist from './components/Wishlist';
import CookieManager from './components/CookieManager';
import NavBar from './components/NavBar/NavBar.jsx';
import 'styles/WishlistApp.less';

var WishlistMain = React.createClass({
  render() {
    return (
      <div className="WishlistPage-container main-container">
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
