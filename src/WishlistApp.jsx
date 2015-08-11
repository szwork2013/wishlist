import storefront from 'storefront';
import React from 'react';

import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import Wishlist from './components/Wishlist';
import CookieManager from './components/CookieManager';
import NavBar from './components/NavBar/NavBar.jsx';
import Catalog from './components/Catalog/Catalog.jsx';

var WishlistApp = React.createClass({
  render() {
    return (
      <div>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width user-scalable=no"/>
        <CookieManager>
          <Header/>
          <NavBar/>
          <div className="top-bar">
            <Footer/>
          </div>
          <Wishlist/>
          <Footer/>
          <Catalog/>
        </CookieManager>
      </div>
    );
  }
});

storefront.export('WishlistPage@vtex.wishlist', WishlistApp);

// Enable react hot loading with external React
// see https://github.com/gaearon/react-hot-loader/tree/master/docs#usage-with-external-react
if (module.hot) {
  window.RootInstanceProvider = require('react-hot-loader/Injection').RootInstanceProvider;
}
