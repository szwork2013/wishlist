import React from 'react';

import Name from './Name.jsx';
import WishlistIcon from './WishlistIcon.jsx';
import style from '../../styles/NavBar.less';

let NavBar = React.createClass({

  render: function(){
    return (
      <div className="wishlistnav col-xs-12">
          <div className="col-xs-6"><Name/></div>
          <div className="col-xs-6"><WishlistIcon/></div>
          <div className="col-xs-4"></div>
          <div className="col-xs-4"></div>
      </div>
    );
  }
});

export default NavBar;
