import React from 'react';

import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import Wishlist from './components/Wishlist';
import CookieController from './components/CookieController';
import NavBar from './components/NavBar/NavBar.jsx';

var WishlistMain = React.createClass({
  render: function(){
    return (
      <div>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width user-scalable=no"/>
        <CookieController>
          <Header/>
          <NavBar/>
          <div className="top-bar">
            <Footer/>
          </div>
          <Wishlist/>
          <Footer/>
        </CookieController>
      </div>
    );
  }
});
export default WishlistMain;
