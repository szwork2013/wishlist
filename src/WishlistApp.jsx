import storefront from 'storefront';
import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Wishlist from './components/Wishlist';
import Catalog from './components/Catalog';

var WishlistApp = React.createClass({
  render: function(){
    return (
      <div>
        <Header/>
        <Wishlist/>
        <Footer/>
        <Catalog/>
      </div>
    );
  }
});

storefront.export('WishlistPage@vtex.wishlist', WishlistApp);
