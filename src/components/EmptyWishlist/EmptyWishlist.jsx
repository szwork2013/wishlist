import React from 'react';

import 'styles/EmptyWishlist.less';

let EmptyWishlist = React.createClass({

  render() {
    return (
      <div className="bottom-bar wishlistnav col-xs-12">
        Não há produtos na sua lista
      </div>
    );
  }
});

export default EmptyWishlist;
