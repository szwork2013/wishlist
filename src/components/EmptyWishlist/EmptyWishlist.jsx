import React from 'react';

import 'styles/EmptyWishlist.less';

let EmptyWishlist = React.createClass({

  render() {
    return (
      <div className="bottom-bar wishlistnav col-xs-12 emptypage">
        Você ainda não possui nenhum item na sua wishlist.
        <a href="/wishlist/catalog">Consulte alguns produtos no nosso catálogo.</a>
      </div>
    );
  }
});

export default EmptyWishlist;
