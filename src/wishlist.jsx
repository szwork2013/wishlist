import storefront from 'storefront';
import React from 'react';

import Header from './components/Header';

var Page = React.createClass({
	render: function(){
		return(
			  <Header/>
		);
	}	
});

storefront.export('WishlistPage@vtex.wishlist', Page);
