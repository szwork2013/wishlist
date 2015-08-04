import React from 'react';
import WishlistStore from 'stores/WishlistStore';
import Send from './Footer/Send';
import _ from 'underscore';

let MailList = React.createClass({
  // funcao() {


  // },

  render() {
    return(
      <div>
	    <form action="mailto:you@yourdmainhere.com" method="post" enctype="text/plain" >
          Nome:<input type="text" name="Name"/>
          Email:<input type="text" name="Email"/>
          <input type="submit" name="submit" value="Submit"/>
        </form>
      </div>
    );
  }
	//chamar wishlist store e pegar o mail de lá
});

export default MailList;