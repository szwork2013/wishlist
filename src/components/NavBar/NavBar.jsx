import React from 'react';

import Name from './Name.jsx';
import WishlistIcon from './WishlisIcon.jsx';
import style from '../../styles/NavBar';

let NavBar = React.createClass({

  render: function(){
    return (
      <div class="wishlistnav col-xs-12">
          <Name/>
          <WishlistIcon/>
          <div class="col-xs-4"></div>
          <div class="col-xs-4"></div>
      </div>
    );
  }
});

export default NavBar;
