import React from 'react';

import Menu from './header/Menu';
import Brand from './header/Brand';
import GoToCart from './header/GoToCart';

let Header = React.createClass({

  render: function(){
    return (
      <nav className="col-md-12 navbar navbar-default">
        <div className="container-fluid row">
          <Menu/>
          <Brand/>
          <GoToCart/>
        </div>
      </nav>
    );
  }
});

export default Header;
