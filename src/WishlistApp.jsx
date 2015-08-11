import React from 'react';
import { dispatcher } from 'sdk';

import WishlistMain from './WishlistMain';
import Catalog from './components/Catalog/Catalog';

let wishlistmain = {
  name: 'WishlistPage@vtex.wishlist',
  constructor: WishlistMain
};
dispatcher.actions.ComponentActions.register(wishlistmain);

let catalog = {
  name: 'CatalogPage@vtex.wishlist',
  constructor: Catalog
};
dispatcher.actions.ComponentActions.register(catalog);

// Enable react hot loading with external React
// see https://github.com/gaearon/react-hot-loader/tree/master/docs#usage-with-external-react
if (module.hot) {
  window.RootInstanceProvider = require('react-hot-loader/Injection').RootInstanceProvider;
}
