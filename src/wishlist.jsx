import storefront from 'storefront';
import React from 'react';

import Hello from './components/Hello';
import Menu from './components/header/Menu';

var Page = React.createClass({
	render: function(){
		return(
			  <div>
			  	<Menu/>
			  	<Hello/>
			  </div>
		);
	}
	
});

storefront.export('WishlistPage@vtex.wishlist', Page);
