import storefront from 'storefront';
import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Product from './components/Product';
import Catalog from './components/Catalog';

var Page = React.createClass({
  render: function(){
    return (
      <div>
        <Header/>
        <Product/>
        <Footer/>
        <Catalog/>
      </div>
    );
  }
});

storefront.export('WishlistPage@vtex.wishlist', Page);
