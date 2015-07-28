import storefront from 'storefront';
import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Wishlist from './components/Wishlist';
import Catalog from './components/Catalog';
import CookieController from './components/CookieController';

var WishlistApp = React.createClass({
  render: function(){
    return (
      <div>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width user-scalable=no"/>
        <CookieController>
          <Header/>
          <Wishlist/>
          <Footer/>
          <Catalog/>
        </CookieController>
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
