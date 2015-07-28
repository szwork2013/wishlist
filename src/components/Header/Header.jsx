import React from 'react';

import Menu from './Header/Menu';
import Brand from './Header/Brand';
import GoToCart from './Header/GoToCart';
import style from '../styles/WishlistPage.less';

let Header = React.createClass({

  render: function(){
    return (
      <nav className="navigation col-xs-12 navbar navbar-default">
        <div className="container-fluid row top-buttons">
          <Menu/>
          <Brand/>
          <GoToCart/>
        </div>
      </nav>
    );
  }
});

export default Header;
