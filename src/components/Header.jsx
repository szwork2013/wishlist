import React from 'react';

import Menu from './header/Menu';
import Brand from './header/Brand';
import Buy from './header/Buy';

let Header = React.createClass({

  render: function(){
		return(
			  <div className="col-md-12 navbar navbar-default">
			  	<div className="col-md-4 nav">
				  		<Menu/>
				  </div>
				  <div className="col-md-4 navbar-brand">
				  		<Brand/>
				  </div>
				  <div className="col-md-4 nav-right">
				  		<Buy/>
				  </div>
			  </div>
		);
	}	
});

export default Header;