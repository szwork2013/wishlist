import storefront from 'storefront';
import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Product from './components/Product';
import Catalog from './components/Catalog';
import List from './components/List';
import CookieController from './components/CookieController';

var Page = React.createClass({
  render: function(){
    return (
      <div>
        <CookieController>
          <Header/>
          <Product/>
          <Footer/>
          <Catalog/>
          <List/>
        </CookieController>
      </div>
    );
  }
});

storefront.export('WishlistPage@vtex.wishlist', Page);
