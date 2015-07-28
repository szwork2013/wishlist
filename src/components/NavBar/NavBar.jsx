import React from 'react';

import Name from './Name.jsx';
import WishlistIcon from './WishlistIcon.jsx';
import style from '../../styles/NavBar.less';

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
