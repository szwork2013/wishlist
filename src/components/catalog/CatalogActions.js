import React from 'react';
import flux from '../../flux';

class CatalogActions {
  addSku(sku) {
    this.dispatch(sku);
  }
}

export default flux.createActions(CatalogActions);
