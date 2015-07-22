import React from 'react';

let CatalogActions = {
  addToWishlist: function(sku, update) {
    AppDispatcher.handleAction({
      actionType: FluxCartConstants.CART_ADD,
      sku: sku,
      update: update
    })
  }
};

export default CatalogActions;
