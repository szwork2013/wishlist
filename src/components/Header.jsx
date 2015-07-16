import React from 'react';

import Menu from './header/Menu';
import Brand from './header/Brand';
import Buy from './header/Buy';

let Header = React.createClass({

  render: function(){
		return(
			  <nav className="col-md-12 navbar navbar-default">
			    <div className="container-fluid row">
			  	  <div className="col-md-4">
				  		<Menu/>
				  </div>
				  <Brand/>
				  <Buy/>
				</div>
			  </nav>
		);
	}	
});

export default Header;