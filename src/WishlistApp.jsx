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
